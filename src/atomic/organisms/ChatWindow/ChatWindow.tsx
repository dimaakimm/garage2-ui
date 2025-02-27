import { useState } from 'react'
import styles from './ChatWindow.module.scss'
import { Play } from 'lucide-react'
import TextMessage from '../../molecules/TextMessage/TextMessage.tsx'
import ChatInput from '../../molecules/ChatInput/ChatInput.tsx'

export interface Message {
    type: 'text' | 'audio'
    content: string
}

const ChatWindow = () => {
    const [messages, setMessages] = useState<Message[]>([])

    const handlePlayAudio = async (url: string) => {
        try {
            const response = await fetch(url)
            const blob = await response.blob()
            const audioUrl = URL.createObjectURL(blob)
            const audio = new Audio(audioUrl)
            await audio.play()
        } catch (error) {
            console.error('Ошибка воспроизведения аудио:', error)
        }
    }

    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatCard}>
                <div className={styles.chatContent}>
                    {messages.map((msg, index) => (
                        <div key={index} className={styles.message}>
                            {msg.type === 'text' ? (
                                <TextMessage text={msg.content} />
                            ) : (
                                <button
                                    className={styles.iconButton}
                                    onClick={() => handlePlayAudio(msg.content)}
                                >
                                    <Play size={20} />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
                <ChatInput setMessages={setMessages} messages={messages} />
            </div>
        </div>
    )
}

export default ChatWindow
