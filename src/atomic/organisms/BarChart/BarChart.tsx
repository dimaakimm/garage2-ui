import React from 'react'
import styles from './BarChart.module.scss'

interface BarChartProps {
}
const BarChart:React.FC<BarChartProps> = () => {
    const barW = 40;
    const gap = 24;
    const values = [33, 40, 60, 62, 81, 79, 70, 60, 50, 25, 10, 60, 70, 70, 86];

    return (
        <div className={styles.chart}>
            {
                values.map((val, index) =>
                    {
                        const x = (barW+gap) * index;
                        const height = val;
                        return (
                            <div style={{left: x}} className={styles.section}>
                                <div className={styles.background}></div>
                                <div style={{height: height + "%"}} className={styles.bar}></div>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default BarChart
