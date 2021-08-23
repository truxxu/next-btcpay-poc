import Image from 'next/image'

import styles from "./Footer.module.scss"
import btc from '../public/images/btc-ln.svg'

const Footer = () => {
	return (
		<footer>
			<div className={styles.container}>
				<p className={styles.footerText}>Powered by Bitcoin and Bitcoin over Lightning Network</p>
				<Image
					src={btc}
					alt="bitcoin lightning picture"
					height={100}
				/>
			</div>
		</footer>
	)
}

export default Footer
