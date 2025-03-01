import styles from './CommentsSection.module.scss'
import Box from '../../atoms/Box/Box.tsx'

const positiveArray = [
    'Вежливый диалог',
    'Установление доверия клиента',
    'Активное слушание',
    'Предоставление релевантной информации',
]
const negativeArray = [
    'Некоторые моменты не конкретные',
    'Отсутствие дополнительных услуг',
    'Мало использовалось имя клиента',
    'Упомянул общие характеристики моделей, но не предоставил конкретных фактов, которые могли бы заинтересовать клиента',
]
const CommentsSection = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Комментарии</div>
            <div className={styles.content}>
                <Box
                    title="Хорошие моменты"
                    comments={positiveArray}
                    backgroundColor="#F9FFFA"
                />
                <Box
                    title="Спорные моменты"
                    comments={negativeArray}
                    backgroundColor="#FFF7F7"
                />
            </div>
        </div>
    )
}

export default CommentsSection
