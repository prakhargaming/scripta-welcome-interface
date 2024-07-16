import { useState, useEffect, useRef } from 'react';
import Header from "@/components/Header";
import Image from "next/image";

export default function InterviewPage1() {
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
            audioChunksRef.current.push(event.data);
        };

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            setAudioURL(audioUrl);
            audioChunksRef.current = [];
        };

        mediaRecorder.start();
        setIsRecording(true);
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const handleMicClick = () => {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    const handleDownload = () => {
        if (audioURL) {
            const a = document.createElement('a');
            document.body.appendChild(a);
            a.style = 'display: none';
            a.href = audioURL;
            a.download = 'recording.wav';
            a.click();
            window.URL.revokeObjectURL(audioURL);
        }
    };

    return (
        <div className="relative min-h-screen">
            {/* Blurred background */}
            <div className="absolute inset-0 z-0 backgroundInterview"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col min-h-screen px-16 py-8 items-center pl-[46px]">
                <Header />
                <div className="interviewInterfaceTextBig">VDart</div>
                <div className="interviewInterfaceTextSmall">Top Talent, Equitably Sourced</div>
                <div className="h-[45px]" />
                <div className="flex flex-row space-x-4">
                    <div className="interviewInterfaceGlassBox flex flex-col items-center justify-center">
                        <div className="textInsideGlassBox text-center mb-8">
                            Click the button down below to record your answer. <br /> <br />
                            Please submit before the timer runs out to ensure your response is saved.
                        </div>
                        <button onClick={handleMicClick}>
                            <Image
                                src="/micButton.svg"
                                alt="Microphone"
                                width={116}
                                height={116}
                            />
                        </button>
                        <div className="mt-4">
                            {isRecording ? 'Recording...' : 'Click to start recording'}
                        </div>
                        {audioURL && (
                            <div className="mt-4">
                                <button 
                                    onClick={handleDownload}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Download Recording
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="w-[50px]" />
                    <div className="interviewInterfaceGlassBox flex items-center justify-center">
                        <div className="w-[461px] text-center text-opacity-44 text-2xl leading-[130%] leFont">
                            <span className="font-bold text-gray-400 underline">Question #1: </span> <br /> <br />
                            Can you tell me about a time when you faced a significant challenge at work and how you handled it?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}