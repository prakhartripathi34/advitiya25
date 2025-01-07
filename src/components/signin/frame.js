import React from 'react'

export default function DecorativeFrame({ children }) {
  return (
    <div className="relative mt-16 md:mb-0 w-full max-w-md mb-8  md:max-w-2xl my-16">
      {/* Outer container with aspect ratio */}
      <div className="relative w-full pb-[66.67%]"> {/* 3:2 aspect ratio */}
        {/* Green frame with decorative shapes */}
        <div className="absolute inset-0 bg-[#36D66D] rounded-[2rem] rounded-t-[3rem] shadow-lg">
          {/* Top decorative shape */}
          <div 
            className="absolute -top-5 lg:-top-8 left-1/2 -translate-x-1/2 sm:w-48 md:w-60 lg:w-84 xl:w-96 h-5 lg:h-8 bg-gradient-to-r from-[#36D66D] to-[#0A772F]"
            style={{
              borderTopLeftRadius: '100px',
              borderTopRightRadius: '100px',
            }}
          />
          
          {/* Bottom decorative shape */}
          <div 
            className="absolute -bottom-5 lg:-bottom-8 left-1/2 -translate-x-1/2 sm:w-48 md:w-60 lg:w-84 xl:w-96 h-5 lg:h-8 bg-gradient-to-r from-[#36D66D] to-[#0A772F]"
            style={{
              borderBottomLeftRadius: '100px',
              borderBottomRightRadius: '100px',
            }}
          />

          {/* Black space with white border */}
          <div className="absolute inset-[1.5rem] bg-black rounded-[1.5rem] rounded-t-[2.5rem]">
            {/* White border line */}
            <div className="absolute inset-[2px] border-[1px] border-white/30 rounded-[1.4rem] rounded-t-[2.4rem]">
              {/* Inner dark content area */}
              <div className="absolute inset-[2px] bg-[#0D1117] rounded-[1.3rem] rounded-t-[2.3rem] overflow-hidden">
                {/* Content container */}
                <div className="relative w-full h-full p-6">
                  {children}
                  <img src="/signin/shirts.png" alt="background image" className="pointer-events-none absolute bottom-0 right-0"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
