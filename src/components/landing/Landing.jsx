import styles from './landing.module.css';

function Landing() {
    return (
        <div className={styles.landing}>
            <p className={styles.heading}>Atom Space</p>
            <img className={styles.img} src="uppertext.png" alt="" />
            <p className={styles.para}>Lorem ipsum dolor sit amet consectetur. Et arcu habitasse dignissim turpis faucibus mi sagittis duis tortor. Aliquam adipiscing nam tellus sem sem lorem. </p>
            <div className={styles.buttons}>
                <button className={styles.button1}>Explore more</button>
                <button className={styles.button2}>Sample button</button>
            </div>
        </div>
    )
}

export default Landing;