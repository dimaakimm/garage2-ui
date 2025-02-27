import React, { useState } from 'react'
import styles from './ChatInput.module.scss'
import { Mic, Send } from 'lucide-react'
import { Message } from '../../organisms/ChatWindow/ChatWindow.tsx'
import { useReactMediaRecorder } from 'react-media-recorder'

interface ChatInputProps {
    setMessages: (msg: Message[]) => void
    messages: Message[]
}

const ChatInput: React.FC<ChatInputProps> = ({ setMessages, messages }) => {
    const [text, setText] = useState<string>('')

    const { startRecording, stopRecording, mediaBlobUrl } =
        useReactMediaRecorder({
            audio: true,
        })

    const sendMessage = (msg: string, type: 'text' | 'audio' = 'text') => {
        setMessages([...messages, { type, content: msg }])
        setText('')
    }

    const handleSendVoice = async () => {
        if (mediaBlobUrl) {
            try {
                const response = await fetch(mediaBlobUrl) // Загружаем Blob через fetch
                const blob = await response.blob()
                const blobUrl = URL.createObjectURL(blob) // Создаем URL для Blob
                sendMessage(blobUrl, 'audio')
            } catch (error) {
                console.error('Ошибка загрузки аудио Blob:', error)
            }
        }
    }

    return (
        <div className={styles.inputContainer}>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введите сообщение"
                className={styles.input}
            />
            <button
                onClick={() => sendMessage(text)}
                className={styles.sendButton}
            >
                <Send size={20} />
            </button>
            <button
                onMouseDown={startRecording}
                onMouseUp={stopRecording}
                className={styles.micButton}
            >
                <Mic size={20} />
            </button>
            {mediaBlobUrl && (
                <button onClick={handleSendVoice} className={styles.sendButton}>
                    <Send size={20} />
                </button>
            )}
        </div>
    )
}

export default ChatInput
