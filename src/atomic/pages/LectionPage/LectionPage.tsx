import styles from './LeactionPage.module.scss'
import Button from '../../atoms/Button/Button.tsx'
import ChatWindow from '../../organisms/ChatWindow/ChatWindow.tsx'

const LectionPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.situationSector}>
                    <div className={styles.title}>Ситуация</div>
                    <div className={styles.description}>
                        Вы работаете консультантом в автосалоне премиум-класса.
                        Сегодня в салон зашёл потенциальный покупатель, но вы
                        пока не знаете, кто он и какие автомобили рассматривает.
                        Ваша задача — определить его потребности и интересы,
                        чтобы предложить подходящий автомобиль и успешно
                        завершить продажу.
                    </div>
                    <div className={styles.button}>
                        <Button>Начать задание</Button>
                    </div>
                    <ChatWindow />
                </div>
            </div>
        </div>
    )
}

export default LectionPage
