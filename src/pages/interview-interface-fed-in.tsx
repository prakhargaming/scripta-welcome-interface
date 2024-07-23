import { useState, useEffect, useRef } from 'react';
import Header from "@/components/Header";
import Image from "next/image";
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.REACT_APP_DO_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_DO_SECRET_ACCESS_KEY,
    endpoint: 'https://nyc3.digitaloceanspaces.com'
  });
  
const s3 = new AWS.S3();

export default function InterviewPage1() {
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const [error, setError] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const streamRef = useRef(null);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            streamRef.current = stream;
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            mediaRecorder.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
                setAudioBlob(audioBlob);
                audioChunksRef.current = [];
            };

            mediaRecorder.start();
            setIsRecording(true);
        } catch (err) {
            setError('Error accessing microphone: ' + err.message);
        }
    };

    const stopMediaTracks = (stream) => {
        stream.getTracks().forEach(track => track.stop());
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            if (streamRef.current) {
                stopMediaTracks(streamRef.current);
                streamRef.current = null;
            }
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

    const uploadToDigitalOcean = async (audioBlob) => {
        const params = {
            Bucket: 'scriptaaudiofiles',
            Key: `recording-${Date.now()}.webm`,  // Changed to .webm
            Body: audioBlob,
            ACL: 'public-read',
            ContentType: 'audio/webm'  // Changed to audio/webm
        };
      
        try {
            const data = await s3.upload(params).promise();
            console.log('Audio uploaded successfully', data.Location);
            alert("Audio uploaded successfully: " + data.Location);
        } catch (error) {
            console.error('Error uploading audio:', error);
            alert("Error uploading audio: " + error.message);
            setError('Error uploading audio: ' + error.message);  // Update the error state
        }
    };

    const handleSave = () => {
        if (audioBlob) {
            uploadToDigitalOcean(audioBlob);
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
                        {audioBlob && (
                            <div className="mt-4">
                                <button 
                                    onClick={handleSave}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Save Recording?
                                </button>
                            </div>
                        )}
                        {error && (
                            <div className="mt-4 text-red-500">
                                {error}
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
