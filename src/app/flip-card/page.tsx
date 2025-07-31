'use client';

import FlipCard from '../component/FlipCard';
import { useState, useEffect, useRef } from 'react';

export default function FlipCardPage() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 menit
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [cardContents, setCardContents] = useState<{ question: string; answer: string }[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('questions');
    if (stored) {
      setCardContents(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [gameStarted]);

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setGameStarted(false);
    setTimeLeft(300);
  };

  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden">
      <main className="flex-grow justify-center bg-gradient-to-br from-pink-200 via-yellow-100 to-cyan-200 flex flex-col items-center py-24 px-14 text-2xl animate-fade-in w-screen">
        <header className="p-5 text-center">
          <h1 className="text-7xl font-extrabold text-pink-700 mb-12 drop-shadow-xl animate-bounce">MATH CLASS</h1>
        </header>
        
        <div className="flex flex-wrap justify-center gap-12 p-8">
          {/* bagian kiri yang flipcard */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-6 text-xl">
            {cardContents.map((card, index) => (
              <div
                key={index}
                className="transition-transform duration-300 hover:scale-105"
              >
                <FlipCard
                  number={index + 1}
                  content={card.answer}
                  question={card.question}
                  onClick={() => {
                    setSelectedQuestion(card.question);
                    setSelectedAnswer(card.answer);
                    setShowAnswer(false);
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* bagian kanan yang show anser timer  */}
          <div className="w-[32rem] p-8 bg-yellow-50 bg-opacity-95 rounded-2xl shadow-2xl text-gray-800 text-2xl flex flex-col justify-between animate-fade-in">
            <div>
              {selectedQuestion && (
                <>
                  <h2 className="font-bold mb-2">Question:</h2>
                  <p>{selectedQuestion}</p>
                  {showAnswer ? (
                    <>
                      <h2 className="font-bold mt-4 mb-2">Answer:</h2>
                      <p>{selectedAnswer}</p>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setShowAnswer(true)}
                        className="mt-4 px-6 py-3 bg-emerald-500 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-600 transition text-2xl"
                      >
                        Show Answer
                      </button>
                      <div className="mt-4 bg-white rounded shadow-md p-3 w-full text-center">
                        <h2 className="font-extrabold text-3xl text-orange-600">Time Left :</h2>
                        <p className="font-extrabold text-3xl text-orange-600">
                          {String(Math.floor(timeLeft / 60)).padStart(2, '0')}:
                          {String(timeLeft % 60).padStart(2, '0')}
                        </p>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => {
                  setSelectedQuestion('');
                  setSelectedAnswer('');
                  setShowAnswer(false);
                }}
                className="px-6 py-3 bg-pink-500 text-white font-bold rounded-xl shadow-lg hover:bg-pink-600 transition text-2xl"
              >
                Clear
              </button>
              <button
                onClick={resetTimer}
                className="px-6 py-3 bg-orange-400 text-white font-bold rounded-xl shadow-lg hover:bg-orange-500 transition text-2xl"
              >
                Reset Timer
              </button>
              <button
                onClick={() => setGameStarted(true)}
                className="px-6 py-3 bg-sky-500 text-white font-bold rounded-xl shadow-lg hover:bg-sky-600 transition text-2xl"
              >
                Start Game
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}