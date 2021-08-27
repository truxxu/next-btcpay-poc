import styles from './Marquee.module.scss'

const Marquee = ({text}: {text: string}) => {
    return (
        <div className={styles.container}>
            <p>{text}</p>
        </div>
    )
}

export default Marquee
