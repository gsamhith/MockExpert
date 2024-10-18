"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/clerk-react';
import { desc, eq } from 'drizzle-orm';
import { index } from 'drizzle-orm/pg-core';
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard';

function InterviewList() {

    const{user}=useUser();
    const [interviewList,setInterviewList]=useState([]);

    useEffect(()=>{
        user&&GetInterviewlist();
    },[user])

    const GetInterviewlist=async()=>{
        const result=await db.select()
        .from(MockInterview)
        .where(eq(MockInterview.createdBy,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(MockInterview.id))
        console.log(result);
        setInterviewList(result);
        }
  return (
    <div>
      <h2 className='font-medium text-xl'>Previous Mock Interview</h2>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
        {interviewList&&interviewList.map((interview,index)=>(
            <InterviewItemCard
            interview={interview}
            key={index}/>
        ))}
     </div>
     </div>
  )
}

export default InterviewList
