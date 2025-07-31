function LoveLetter() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 relative overflow-hidden min-h-screen flex items-center">
      {/* Floating romantic elements */}
      <div className="absolute top-20 left-16 text-pink-300 text-2xl animate-bounce" style={{ animationDelay: '0s' }}>🌸</div>
      <div className="absolute top-32 right-20 text-rose-300 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>💖</div>
      <div className="absolute bottom-40 left-28 text-pink-400 text-xl animate-bounce" style={{ animationDelay: '2s' }}>🦋</div>
      <div className="absolute bottom-20 right-32 text-rose-400 text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>✨</div>
      <div className="absolute top-1/2 left-10 text-pink-300 text-lg animate-bounce" style={{ animationDelay: '1.5s' }}>🌹</div>
      <div className="absolute top-1/3 right-12 text-rose-300 text-xl animate-bounce" style={{ animationDelay: '2.5s' }}>💫</div>
      
      {/* Removed background bubbles for cleaner look */}
      
      <div className="max-w-4xl mx-auto relative w-full">
        {/* Elegant letter container with multiple layers */}
        <div className="relative group">
          {/* Outer magical glow effect */}
          <div className="absolute -inset-6 bg-gradient-to-r from-pink-300 via-pink-300 to-pink-300 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-all duration-700 animate-pulse"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-pink-400 to-pink-400 rounded-3xl opacity-15 blur-xl group-hover:opacity-25 transition-all duration-500"></div>
          
          {/* Main letter paper with enhanced vintage design */}
          <div 
            className="relative bg-gradient-to-br from-white via-rose-50 to-pink-100 shadow-2xl rounded-3xl overflow-hidden border-2 border-rose-200/60 group-hover:border-rose-300/70 transition-all duration-500"
            style={{
              background: `
                radial-gradient(circle at 20% 20%, rgba(255, 182, 193, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255, 192, 203, 0.1) 0%, transparent 50%),
                linear-gradient(135deg, #ffffff 0%, #fef7f7 15%, #fdf2f8 35%, #fce7f3 55%, #f3e8ff 75%, #faf5ff 100%)
              `,
              boxShadow: `
                0 35px 80px rgba(190, 24, 93, 0.2),
                inset 0 2px 0 rgba(255, 255, 255, 0.8),
                inset 0 -1px 0 rgba(236, 72, 153, 0.1),
                0 0 0 1px rgba(236, 72, 153, 0.15),
                0 0 100px rgba(255, 182, 193, 0.3)
              `
            }}
          >
            {/* Simplified paper texture overlay */}
            <div 
              className="absolute inset-0 opacity-20 rounded-3xl"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 40%, rgba(255, 182, 193, 0.05) 0%, transparent 50%)`
              }}
            ></div>
            
            {/* Ornate decorative border corners */}
            <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-rose-300/50 rounded-tl-xl"></div>
            <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-rose-300/50 rounded-tr-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-rose-300/50 rounded-bl-xl"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-rose-300/50 rounded-br-xl"></div>
            
            {/* Decorative flourishes in corners */}
            <div className="absolute top-6 left-6 text-rose-300 text-lg opacity-60">❀</div>
            <div className="absolute top-6 right-6 text-rose-300 text-lg opacity-60">❀</div>
            <div className="absolute bottom-6 left-6 text-rose-300 text-lg opacity-60">❀</div>
            <div className="absolute bottom-6 right-6 text-rose-300 text-lg opacity-60">❀</div>
            
            {/* Simplified vintage border */}
            <div className="absolute inset-8 rounded-2xl border border-dashed border-rose-300/30 opacity-40"></div>
            
            {/* Removed romantic watermark elements for cleaner look */}
            
            {/* Subtle vintage coffee stains */}
            <div className="absolute top-12 right-16 w-6 h-6 bg-amber-100 rounded-full opacity-20 blur-sm"></div>
            <div className="absolute bottom-24 left-12 w-3 h-3 bg-amber-200 rounded-full opacity-15 blur-sm"></div>
            <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-amber-50 rounded-full opacity-25 blur-sm"></div>
            
            <div className="relative z-10 p-12 md:p-16">
              {/* Greeting with enhanced typography */}
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl text-gray-600 font-script mb-4 relative">
                  <span 
                    className="relative z-10" 
                    style={{ 
                      textShadow: '3px 3px 6px rgba(107, 114, 128, 0.15)'
                    }}
                  >
                    Dear Romi,
                  </span>
                  <div className="absolute -bottom-2 left-0 w-40 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-300 rounded-full opacity-70"></div>
                  <div className="absolute -bottom-1 left-2 w-32 h-0.5 bg-gradient-to-r from-rose-300 via-pink-300 to-transparent rounded-full opacity-50"></div>
                </h2>
              </div>
              
              {/* Letter content with beautiful typography */}
              <div className="prose prose-lg max-w-none">
                <div className="space-y-6 text-rose-700 leading-relaxed" style={{ 
                  textShadow: '0 1px 2px rgba(0,0,0,0.02)',
                  fontSize: '1.125rem',
                  lineHeight: '1.8'
                }}>
                  <p className="text-gray-600 font-script text-xl">
                    This past year with you has been incredible - it's been my favorite chapter of my life. I didn't know how much I needed you till you came into my life. Now that you're here, I can't imagine my world without you.
                  </p>
                  
                  <p className="text-gray-600 font-script text-xl">
                    I first want to go back to the first day we met. Everything about that day I absolutely adored - it was so much fun playing with you. Then hearing you talk and laugh made it so much better. From that moment on I was completely drawn to you. You have such a wonderful personality that made me feel safe and comfortable around you, and you're so fun to be around with.
                  </p>
                  
                  <p className="text-gray-600 font-script text-xl">
                    I could never get enough of you and I always wanted to spend more time with you. I was the happiest boy on earth whenever I was with you. I never seen any girl as perfect as you, so I had to make you mine before anyone else sees the treasure I found.
                  </p>
                  
                  <p className="text-gray-600 font-script text-xl">
                    Ever since I met you, you've made my days better. I love being able to give all my love to a girl like you - it feels right being with you, just so natural. I can imagine myself having a future with you and having a family together. I know you are the one I want to do everything with. I love every memory with you.
                  </p>
                  
                  <p className="text-gray-600 font-script text-xl">
                    This year I got to know you more and it just amazes me how you make me fall in love with you even more. Every single moment with you has been amazing and I love you more each day. You fill my heart with so much joy and happiness and I feel so lucky and proud to call you mine. You mean everything to me.
                  </p>
                  
                  <p className="text-gray-600 font-script text-xl">
                    I can imagine how it will be when we are finally able to be in each other's arms and like we are finally at home. I'm looking forward to spending the rest of my life with you and now we get to start our second year together and I know it's gonna be even better.
                  </p>
                  
                  <p className="text-gray-600 font-script text-xl">
                    I love you more than anything you can think of. Happy 1 year to the love of my life. I love you my princess.
                  </p>
                  
                  {/* Elegant signature section */}
                  <div 
                    className="text-right mt-12 pt-8 relative"
                    style={{
                      borderTop: '1px solid rgba(236, 72, 153, 0.2)',
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255, 182, 193, 0.05) 50%, transparent 100%)'
                    }}
                  >
                    {/* Decorative line above signature */}
                    <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-rose-300 to-transparent"></div>
                    
                    <div className="inline-block text-right">
                      <p className="text-xl font-script text-gray-600 mb-2 opacity-80">
                        Forever and always yours,
                      </p>
                      <div className="flex items-center justify-end space-x-3">
                        <div 
                          className="text-3xl font-script text-gray-600"
                          style={{
                            textShadow: '2px 2px 4px rgba(107, 114, 128, 0.1)'
                          }}
                        >
                          Your boyfriend Luis
                        </div>
                        <div className="text-3xl animate-pulse">❤️</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced bottom decorative border */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-3 opacity-70 rounded-b-3xl"
              style={{
                background: 'linear-gradient(90deg, rgba(236, 72, 153, 0.3) 0%, rgba(244, 114, 182, 0.4) 25%, rgba(251, 146, 60, 0.3) 50%, rgba(244, 114, 182, 0.4) 75%, rgba(236, 72, 153, 0.3) 100%)'
              }}
            ></div>
            
            {/* Subtle inner glow */}
            <div 
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                boxShadow: 'inset 0 0 100px rgba(255, 182, 193, 0.1)'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoveLetter;