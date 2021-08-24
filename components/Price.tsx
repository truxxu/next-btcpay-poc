import styles from './Price.module.scss'

interface PriceProps {
    sats: number;
    rate?: number;
};

const Price = ({sats, rate}: PriceProps) => {
    const convertToFiat = (rate: number, sats: number) => {
        const val = rate * 0.00000001 * sats
        return val.toFixed()
    }

    return (
        <div className={styles.container}>
            <h1>{sats} sats ≈ ${convertToFiat(rate, sats)} COP</h1>
        </div>
    )
}

export default Price
