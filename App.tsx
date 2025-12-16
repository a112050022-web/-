import React, { useState, useEffect } from 'react';
import { fetchAnswer } from './services/openRouterService';
import { EyeGraphic } from './components/EyeGraphic';
import { BackgroundCircles } from './components/BackgroundCircles';

const App: React.FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleGetAnswer = async () => {
    setIsLoading(true);
    setError(null);
    setAnswer(null);
    setShowResult(false);

    try {
      // 人為延遲一點點，增加「儀式感」 (Specification 2.2)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const result = await fetchAnswer(question);
      setAnswer(result);
      setShowResult(true);
    } catch (err) {
      setError("星辰似乎暫時遮蔽了視線，請稍後再試。");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setQuestion('');
    setAnswer(null);
    setShowResult(false);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4A6fa5] via-[#2B3A60] to-[#1A2540] text-gray-100 flex flex-col items-center justify-center relative overflow-hidden font-serif selection:bg-[#BCC65B] selection:text-[#1A2540]">
      <BackgroundCircles />

      <main className="relative z-10 w-full max-w-md px-6 py-8 flex flex-col items-center min-h-[600px] justify-center">
        
        {/* Title Section */}
        <header className={`text-center transition-all duration-700 ${showResult ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 mb-8'}`}>
          <div className="mb-4 text-[#BCC65B] animate-pulse-slow">
            <EyeGraphic className="w-32 h-20 mx-auto drop-shadow-[0_0_15px_rgba(188,198,91,0.5)]" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl tracking-wider text-[#BCC65B] drop-shadow-md">
            BOOK<br/>
            <span className="text-2xl italic font-serif text-[#a3ad52]">of</span><br/>
            ANSWERS
          </h1>
          <p className="mt-4 text-sm text-gray-300 tracking-widest uppercase opacity-80">
            為迷惘者指引方向
          </p>
        </header>

        {/* Input Section */}
        {!showResult && !isLoading && (
          <div className="w-full flex flex-col items-center space-y-8 animate-fade-in-up">
            <div className="w-full relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#BCC65B] to-[#4A6fa5] rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="在此輸入你的困惑，或保持空白尋求當下啟示..."
                className="relative w-full h-32 bg-[#1A2540]/80 border border-[#BCC65B]/30 rounded-lg p-4 text-center text-lg text-[#E0E0E0] placeholder-gray-500 focus:outline-none focus:border-[#BCC65B] focus:ring-1 focus:ring-[#BCC65B] transition-all resize-none shadow-inner"
              />
            </div>
            
            <button
              onClick={handleGetAnswer}
              className="px-8 py-3 bg-transparent border-2 border-[#BCC65B] text-[#BCC65B] font-display tracking-[0.2em] uppercase rounded-full hover:bg-[#BCC65B] hover:text-[#1A2540] transition-all duration-500 transform hover:scale-105 shadow-[0_0_15px_rgba(188,198,91,0.2)] hover:shadow-[0_0_25px_rgba(188,198,91,0.6)]"
            >
              得到解答
            </button>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center space-y-6 animate-pulse">
            <EyeGraphic className="w-40 h-24 text-[#BCC65B] animate-bounce-slow opacity-80" />
            <p className="text-[#BCC65B] font-serif tracking-widest text-lg">
              星辰運轉中...
            </p>
          </div>
        )}

        {/* Result Section */}
        {showResult && answer && (
          <div className="w-full flex flex-col items-center animate-fade-in-slow text-center">
            
            <div className="mb-6 opacity-60">
              <EyeGraphic className="w-16 h-10 mx-auto text-[#BCC65B]" />
            </div>

            {question && (
              <div className="mb-8 text-sm text-gray-400 border-b border-[#BCC65B]/20 pb-2 w-3/4 mx-auto italic">
                "{question}"
              </div>
            )}
            
            <div className="relative p-8 rounded-xl bg-[#1A2540]/40 border-t border-b border-[#BCC65B]/30 mb-10 shadow-lg backdrop-blur-sm">
              <p className="text-xl md:text-2xl leading-relaxed text-[#E0E0E0] font-medium drop-shadow-md">
                {answer}
              </p>
            </div>

            <button
              onClick={handleReset}
              className="text-sm text-[#BCC65B]/70 hover:text-[#BCC65B] border-b border-transparent hover:border-[#BCC65B] transition-all pb-1 tracking-widest uppercase"
            >
              再一次求問
            </button>
          </div>
        )}

        {/* Error Display */}
        {error && (
           <div className="mt-8 p-4 border border-red-800/50 bg-red-900/20 text-red-200 rounded-lg text-center animate-fade-in">
             <p>{error}</p>
             <button onClick={() => setError(null)} className="mt-2 text-sm underline opacity-70 hover:opacity-100">關閉</button>
           </div>
        )}

      </main>
      
      {/* Footer Decoration */}
      <footer className="absolute bottom-4 text-[10px] text-[#BCC65B]/30 tracking-[0.3em] font-display">
        WISDOM OF THE AGES
      </footer>

      {/* Tailwind Custom Animation Utilities */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-slow {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 1.5s ease-in-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
