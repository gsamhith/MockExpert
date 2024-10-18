"use client";
import Webcam from 'react-webcam';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, StopCircle } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAIModel';
import { UserAnswer } from '@/utils/schema';
import moment from 'moment';
import { useUser } from '@clerk/clerk-react';
import { db } from '@/utils/db';

function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
  const [userAnswer, setUserAnswer] = useState('');
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  useEffect(() => {
    results.map((result) => (
      setUserAnswer(prevAns => prevAns + result?.transcript)
    ));
  }, [results]);

  const UpdateUserAnswer = useCallback(async () => {
    console.log(userAnswer);
    setLoading(true);
    const feedbackPrompt = `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}, User Answer: ${userAnswer}. Based on the question and user answer for the given interview question, please give us a rating for the answer and feedback in the area of improvement, if any, in just 3 to 5 lines in JSON format with rating field and feedback field.`;

    const result = await chatSession.sendMessage(feedbackPrompt);
    const mockJsonResp = (result.response.text()).replace('```json', '').replace('```', '');
    console.log(mockJsonResp);
    const JsonFeedbackResp = JSON.parse(mockJsonResp);

    const resp = await db.insert(UserAnswer)
      .values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns: userAnswer,
        feedback: JsonFeedbackResp?.feedback,
        rating: JsonFeedbackResp?.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-yyyy')
      });

    if (resp) {
      toast('User Answer recorded successfully');
      setUserAnswer('');
      setResults([]);
    }
    setResults([]);
    setLoading(false);
  }, [userAnswer, mockInterviewQuestion, activeQuestionIndex, interviewData, user?.primaryEmailAddress?.emailAddress, setResults]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswer();
    }
  }, [isRecording, userAnswer, UpdateUserAnswer]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };

  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex flex-col items-center justify-center mt-20 text-center bg-black rounded-lg p-5 relative'>
        {/* Image centered */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <Image src='/webcam.png' width={200} height={200} />
        </div>

        {/* Webcam */}
        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: '100%',
            zIndex: 10,
          }}
        />
      </div>
      <Button
        disabled={loading}
        variant="outline" className="my-10"
        onClick={StartStopRecording}>
        {isRecording ?
          <h2 className='text-red-600 animate-pulse flex gap-2 items-center'>
            <StopCircle /> Stop Recording
          </h2>
          :
          <h2 className='text-primary flex gap-2 items-center'><Mic />
            Record Answer</h2>}
      </Button>
      
      <p className='relative bottom-5'>This is <span className='text-[#dc4848] font-semibold'>Beta</span> version please use a Laptop for seemless experience</p>
    </div>
  );
}

export default RecordAnswerSection;
