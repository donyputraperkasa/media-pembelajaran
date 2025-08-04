'use client';

import { useState, useEffect } from 'react';

export default function AdminPage() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [image, setImage] = useState<string | undefined>(undefined);
    const [questions, setQuestions] = useState<{ question: string; answer: string; image?: string }[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('questions');
        if (stored) {
        setQuestions(JSON.parse(stored));
        }
    }, []);

    const handleAdd = () => {
        if (!question.trim() || !answer.trim()) return;
        const newList = [...questions, { question, answer, image }];
        setQuestions(newList);
        localStorage.setItem('questions', JSON.stringify(newList));
        setQuestion('');
        setAnswer('');
        setImage(undefined);
    };

    const handleDelete = (index: number) => {
        const updated = questions.filter((_, i) => i !== index);
        setQuestions(updated);
        localStorage.setItem('questions', JSON.stringify(updated));
    };

    return (
        <main className="min-h-screen w-screen overflow-x-hidden overflow-y-auto bg-gradient-to-br from-yellow-100 via-blue-100 to-pink-100 p-8 pt-32">
        <h1 className="text-3xl font-bold mb-6">Halaman untuk menambah soal untuk GURU</h1>
        <div className="mb-6 space-y-4">
            <input
            type="text"
            placeholder="Pertanyaan"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-2 border rounded"
            />
            <input
            type="text"
            placeholder="Jawaban"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full p-2 border rounded"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setImage(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="w-full p-2 border rounded"
            />
            <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
            Tambah Soal
            </button>
        </div>

        <h2 className="text-xl font-semibold mb-2">Daftar Soal:</h2>
        <ul className="space-y-2">
            {questions.map((q, i) => (
            <li key={i} className="bg-white p-4 rounded shadow flex justify-between items-center">
                <div>
                <p className="font-medium">{q.question}</p>
                <p className="text-sm text-gray-600">Jawaban: {q.answer}</p>
                {q.image && (
                  <img src={q.image} alt="Gambar soal" className="mt-2 max-w-xs rounded" />
                )}
                </div>
                <button
                onClick={() => handleDelete(i)}
                className="text-red-600 hover:underline text-sm"
                >
                Hapus
                </button>
            </li>
            ))}
        </ul>
        </main>
    );
}