import React from 'react'
import styles from './MainPage.module.scss'
import Header from '../../organisms/Header/Header.tsx'
import ReactComponent from '../../../assets/authorAvatar.svg'
import Button from '../../atoms/Button/Button.tsx'

const MainPage: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Header
                durationInMinutes={8}
                authorName="Алексей Волков"
                AuthorAvatar={ReactComponent}
            />
            <div className={styles.content}>
                <div className={styles.mainContent}>sadad</div>
            </div>
            <div className={styles.buttonSection}>
                <Button>
                    <img
                        src="../../../../src/assets/download.svg"
                        alt="download"
                    />
                    Скачать файл
                </Button>
            </div>
        </div>
    )
}

export default MainPage
