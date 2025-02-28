import styles from './CommentsSection.module.scss'

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
                <div className={styles.leftBox}>
                    <div className={styles.subTitle}>Хорошие моменты</div>
                    <div className={styles.comments}>
                        {positiveArray.map((item, index) => (
                            <div className={styles.comment} key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.rightBox}>
                    <div className={styles.subTitle}>Спорные моменты</div>
                    <div className={styles.comments}>
                        {negativeArray.map((item, index) => (
                            <div className={styles.comment} key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentsSection
