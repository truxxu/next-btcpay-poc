import styles from './Price.module.scss'

interface PriceProps {
    sats: number;
    rate: number;
};

const Price = ({sats, rate}: PriceProps) => {
    return (
        <div>
            <h1>{sats} sats ≈ ${rate} COP</h1>
        </div>
    )
}

export default Price
