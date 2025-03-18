import React from 'react'

export const SkillsSection = () => {
  return (
    <div className='bg-black text-white flex items-center '>
        <div className='w-full mx-auto max-w-5xl'>
            <h2 className='text-center text-5xl mb-10'>Skills</h2>
            <div className='flex flex-col gap-6 mb-20'>
                <div className='flex  justify-start gap-24 text-3xl'>
                    <h3>React</h3>
                    <h3>Nextjs</h3>
                    <h3>Typescript</h3>
                    <h3>React Native</h3>
                </div>
                <span className='w-full h-[0.2px] bg-white' />

            </div>
            <div className='flex flex-col gap-6 mb-20'>
                <div className='flex  justify-start gap-32 text-3xl'>
                    <h3>Node JS</h3>
                    <h3>Express</h3>
                    <h3>NestJS</h3>
                    <h3>Django</h3>
                </div>
                <span className='w-full h-[0.2px] bg-white' />

            </div>
            <div className='flex flex-col gap-6 mb-20'>
                <div className='flex  justify-start gap-32 text-3xl'>
                    <h3>PostgreSQL</h3>
                    <h3>MySQL</h3>
                    <h3>Prisma ORM</h3>
                </div>
                <span className='w-full h-[0.1px] bg-white' />

            </div>
            <div className='flex flex-col gap-6 mb-10'>
                <div className='flex  justify-start gap-32 text-3xl'>
                    <h3>AWS</h3>
                    <h3>Firebase</h3>
                    <h3>RESTful API's</h3>
                </div>
                <span className='w-full h-[0.2px] bg-white' />

            </div>
        </div>
    </div>
  )
}
