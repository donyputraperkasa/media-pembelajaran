'use client';

import { useState } from 'react';
import clsx from 'clsx';

type FlipCardProps = {
  number: number;
  content: string;
  question: string;
  image?: string;
  onClick?: () => void;
};

export default function FlipCard({ number, content, question, image, onClick }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
    onClick?.();
  };

  return (
    <div className="transition-transform duration-500">
      <div
        onClick={handleClick}
        className="w-32 h-32 perspective cursor-pointer transition-transform duration-500"
      >
        <div
          className={clsx(
            'relative w-full h-full transform-style-preserve-3d transition-transform duration-500',
            flipped && 'rotate-y-180'
          )}
        >
          {/* Front Side (Number and Question) */}
          <div
            className={clsx(
              'absolute w-full h-full backface-hidden hover:shadow-2xl hover:shadow-blue-400/60 rounded-xl flex flex-col items-center justify-center text-white p-2 text-center transition-shadow duration-300 overflow-hidden break-words',
              flipped ? 'bg-violet-500' : 'bg-orange-500'
            )}
          >
            <div className="text-2xl font-bold">
              {flipped ? '😁' : number}
            </div>
          </div>

          {/* Back Side (Content) */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl flex flex-col items-center justify-center p-4 text-center text-base font-semibold overflow-hidden break-words text-ellipsis line-clamp-4 text-gray-800 border-2 border-gray-300">
            {image && (
              <img
                src={image}
                alt="Gambar soal"
                className="w-full h-24 object-cover rounded mb-2"
              />
            )}
            <p className="w-full overflow-hidden text-ellipsis whitespace-pre-line">
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}