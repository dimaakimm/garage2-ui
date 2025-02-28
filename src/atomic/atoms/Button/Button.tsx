import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'

interface ButtonProps {
    children?: React.ReactNode
    type?: 'primary' | 'secondary'
}
const Button: React.FC<ButtonProps> = ({ children, type = 'primary' }) => {
    return (
        <div
            className={classNames(
                styles.wrapper,
                type === 'primary' ? styles.primary : styles.secondary
            )}
        >
            {children}
        </div>
    )
}

export default Button
