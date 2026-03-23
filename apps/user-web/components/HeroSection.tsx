import React from "react";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-brand-500/10 rounded-full blur-[80px] md:blur-[100px] -z-10 animate-pulse"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-500/20 text-brand-500 text-xs sm:text-sm font-medium mb-6 md:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Delivering within 30km of Gajraula
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] sm:leading-tight px-4 sm:px-0">
            Hungry? We've got <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500">
              you covered.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Discover the best local restaurants, fast food, and cloud kitchens in Gajraula. Premium delivery right to your doorstep.
          </p>

          <div className="max-w-xl mx-auto relative group px-2 sm:px-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-brand-600 rounded-[2rem] sm:rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-card rounded-[2rem] sm:rounded-full p-2 border border-border shadow-2xl overflow-hidden">
              <div className="flex items-center flex-grow">
                <div className="pl-4 pr-2 text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Enter your delivery address..." 
                  className="flex-grow bg-transparent border-none py-4 sm:py-3 px-2 text-foreground focus:outline-none focus:ring-0 placeholder:text-muted-foreground text-sm sm:text-base"
                />
              </div>
              <button className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 sm:py-3 rounded-2xl sm:rounded-full font-bold sm:font-medium transition-all shadow-lg active:scale-95 sm:active:scale-100">
                Find Food
              </button>
            </div>
          </div>

          <div className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              No minimum order
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Lightning fast delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
