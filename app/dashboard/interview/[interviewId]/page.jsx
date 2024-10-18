"use client";
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import React, { useEffect, useState } from 'react';
import { eq } from 'drizzle-orm';
import Webcam from 'react-webcam';
import { WebcamIcon, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link'; // Importing Link

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState(null);
  const [webCamEnabled, setWebcamEnabled] = useState(false);
  const [webCamError, setWebcamError] = useState(false);

  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, [params.interviewId]);

  /**
   * used to get Interview details by mockid/interview id
   */
  const GetInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));
      setInterviewData(result[0]);
    } catch (error) {
      console.error('Error fetching interview details:', error);
    }
  };

  const handleUserMedia = () => {
    setWebcamEnabled(true);
    setWebcamError(false);
  };

  const handleUserMediaError = (error) => {
    console.error('Error accessing webcam:', error);
    setWebcamEnabled(false);
    setWebcamError(true);
  };

  return (
    <div className="my-10 ">
      <h2 className="font-bold text-2xl">Let's get started</h2>

{/* grid main */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8">

{/* left screen */}
        <div className="flex flex-col my-7 gap-5 ">
          {interviewData && (
            <div className="flex flex-col p-5 gap-5 rounded-lg border">
              <h2 className="text-lg"><strong>Job Role/Job Position:</strong> {interviewData.jobPosition}</h2>
              <h2 className="text-lg"><strong>Job Description/tech stack:</strong> {interviewData.jobDesc}</h2>
              <h2 className="text-lg"><strong>Years of experience:</strong> {interviewData.jobExperience}</h2>
            </div>
          )}

          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
               <h2 className='flex gap-2 items-centre text-yellow-500'><Lightbulb/><strong>Information</strong></h2>
               <h2 className='mt-3 text-yellow-500'>{process.env.NEXT_PUBLIC_INFORMATION} </h2>
          </div>
         
        </div>
{/* right screen */}

        <div className="flex flex-col items-center">
          {webCamEnabled ? (
            <Webcam
              onUserMedia={handleUserMedia}
              onUserMediaError={handleUserMediaError}
              mirrored={true}
              style={{
                height: 300,
                width: 300,
              }}
            />
          ) : (
            <>
              <WebcamIcon className="h-72 w-72 my-7 p-20 bg-secondary rounded-lg border" />
              {webCamError && <div className="text-red-500">Failed to access webcam. Please check your permissions.</div>}
              <Button variant="ghost" onClick={() => setWebcamEnabled(true)}>Enable Web Cam and Microphone</Button>
            </>
          )}
        </div>
      </div>
      <div className='flex justify-end items-end'>
      <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
      <Button>Start Interview</Button>
      </Link>
          </div>
    </div>
  );
}

export default Interview;
