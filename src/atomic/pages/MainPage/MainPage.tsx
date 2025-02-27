import React from 'react'
import styles from './MainPage.module.scss'
import ChatWindow from '../../organisms/ChatWindow/ChatWindow.tsx'

const MainPage: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <ChatWindow />
            </div>
        </div>
    )
}

export default MainPage
