import styles from './CommentsSection.module.scss'

const CommentsSection = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Комментарии</div>
            <div className={styles.content}>
                <div className={styles.leftBox}>
                    <div className={styles.subTitle}>Хорошие моменты</div>
                </div>
                <div className={styles.rightBox}>
                    <div className={styles.subTitle}>Спорные моменты</div>
                </div>
            </div>
        </div>
    )
}

export default CommentsSection
