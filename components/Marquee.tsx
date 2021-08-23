import styles from './Marquee.module.scss'

const Marquee = ({text}: {text: string}) => {
    return (
        <div className={styles.container}>
            <marquee behavior="scroll" direction="left">{text}</marquee>
        </div>
    )
}

export default Marquee
