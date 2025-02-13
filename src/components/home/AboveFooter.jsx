import React from 'react'
import { BiBulb, BiPaperclip, BiPaperPlane, BiPhone, BiSolidGraduation, BiSolidQuoteAltLeft, BiSolidQuoteAltRight, BiSpreadsheet } from 'react-icons/bi'
import { BsLightbulb, BsQuote } from 'react-icons/bs'
import { CgQuote } from 'react-icons/cg'
import { GoQuote } from 'react-icons/go'
import { ImQuotesLeft } from 'react-icons/im'
import { TfiQuoteLeft, TfiQuoteRight } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

const AboveFooter = () => {
  return (
    <div className='mt-20 relative'>

        <div className='pb_bg_dark max-w-screen-xl mx-auto rounded-s-3xl p-8'>
            <h2 className='text-4xl font-bold text-white my-3'>What a <span className='pb_text_ylw'>Aspiration</span> Classroom Program does to you?</h2>
            <div className='relative my-4'>
                
                <span className='absolute z-0 top-0 left-9 h-full border-dashed border-l-4 border-[var(--pb-ylw)]' ></span>

                <div className='flex items-center gap-3'>
                    <span className='relative'>
                        <BiSolidGraduation className='p-4 w-20 rounded-full h-20 pb_bg_ylw pb_text_red' />
                    </span>
                    <p className='text-white text-lg'>
                            1.	Structured Learning Path: Provides a clear, well-planned curriculum to guide you step by step through all topics.
                    </p>
                </div>

                <div className='flex items-center gap-3 my-6'>
                    <span className='relative'>
                        <BsLightbulb className='p-4 w-20 rounded-full h-20 pb_bg_ylw pb_text_red' />
                    </span>
                    <p className='text-white text-lg'>
                            2.	Conceptual Clarity: Focus on building a strong foundation in Physics, Chemistry, and Mathematics/Biology.
                    </p>
                </div>

                <div className='flex items-center gap-3'>
                    <span className='relative'>
                        <BiPaperPlane className='p-4 w-20 rounded-full h-20 pb_bg_ylw pb_text_red' />
                    </span>
                    <p className='text-white text-lg'>
                        3.	Regular Assessments: Continuous testing, including mock exams and weekly tests, ensures that you're well-prepared for real exams.
                    </p>
                </div>

                <div className='flex items-center gap-3 my-6'>
                    <span className='relative'>
                        <BiPaperPlane className='p-4 w-20 rounded-full h-20 pb_bg_ylw pb_text_red' />
                    </span>
                    <p className='text-white text-lg'>
                    4.	Doubt Resolution: Regular doubt-solving sessions to ensure you grasp every concept thoroughly.
                    </p>
                </div>

                <div className='flex items-center gap-3'>
                    <span className='relative'>
                        <BiPaperPlane className='p-4 w-20 rounded-full h-20 pb_bg_ylw pb_text_red' />
                    </span>
                    <p className='text-white text-lg'>
                        5.	Time Management Skills: Helps you develop crucial skills to manage time efficiently during exams.
                    </p>
                </div>
            </div>
        </div>

        <div className='max-w-screen-xl mx-auto p-8 border-r-4 border-b-4 rounded-ee-3xl border-dashed border-[var(--pb-ylw)] relative'>
            {/** image is changed here by sanjit have taken logo image address */}
            <img className='absolute bottom-3 m-0 left-0 w-[410px] rounded-se-3xl' src='https://kyletest.in/aspiration-academy/images/logonew.png' /> 
            <div className='relative w-1/2 ml-auto'>
            
               <h3 className='font-bold text-4xl'>Aspiration <span className='pb_text_red'>eAcademy</span></h3>
               <p className='font-bold text-lg my-3'>M.Sc Calcutta University</p>

               <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut aliquid ex ea commodi consequatur
               </p>
               <div className='flex items-center gap-4 mt-3'>
                 <i className='text-lg font-extralight'>Signature here</i>
                 <Link className='flex items-center gap-2 font-bold' to={'/'}> 
                 <BiPhone className='pb_text_red pb_bg_ylw w-8 h-8 rounded-full p-2' /> 123 4567 890</Link>
               </div>
            </div>
        </div>

        <div className='pb_bg_red mt-[75px] relative py-10'>
            <div className='max-w-screen-xl mx-auto'>
                <div className='text-white text-2xl font-medium text-center'>
                    <p>
                        <TfiQuoteLeft className='inline-block text-3xl mr-1' /> But I must explain to you how all this mistaken idea of denouncing pleasure
                        and praising pain was born and I will give you a complete account of the
                        system, and expound the actual teachings of the great explorer of the truth,
                        the master-builder of human happiness. <TfiQuoteRight className='inline-block text-3xl mr-1' />
                    </p>

                    <h4 className='mt-4 mb-2'>TEACHER NAME</h4>
                    <p className='text-sm'>CHAIRMAN & CHIEF MENTOR - ASPIRATION ACADEMY GROUP</p>
                
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default AboveFooter
