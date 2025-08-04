import { Github, MessageCircle, Mail } from 'lucide-react';

export default function Support() {
    return (
        <main className="flex flex-col justify-between h-screen w-full">
            <div className="flex-1 w-full min-w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-green-100 to-yellow-100 animate-gradient text-center">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 drop-shadow-lg mb-8">
                    Hubungi Developer
                </h1>

                <div className="flex bg-white rounded-xl shadow-md p-6 w-full max-w-md text-left gap-6 text-blue-900 items-start">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="flex items-start space-x-3">
                            <Mail className="w-5 h-5" />
                            <p>
                                <a href="mailto:donyputraperkasa@gmail.com" className="underline text-blue-700">donyputraperkasa@gmail.com</a>
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <MessageCircle className="w-5 h-5 text-green-600" />
                            <p>
                                <a href="https://wa.me/6282236343404" className="underline text-green-700">0822-3634-3404</a>
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Github className="w-5 h-5 text-gray-800" />
                            <p>
                                <a href="https://github.com/donyputraperkasa" className="underline text-gray-800">github.com/donyputraperkasa</a>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center pl-6">
                        <img src="images/cat.png" alt="Logo" className="w-16 h-16 hover:scale-105 transition-transform duration-300" />
                    </div>
                </div>               
            </div>           
        </main>
    );
}
