import styles from './Flex.module.css';

function Flex() {
    return (
        <div className={styles.container}>
            <img className={styles.img1} src="/Flex-Images/1.png" alt="" />
            <img className={styles.img2} src="/Flex-Images/2.png" alt="" />
            <img className={styles.img3} src="/Flex-Images/3.png" alt="" />
            <img className={styles.img4} src="/Flex-Images/4.png" alt="" />
            <img className={styles.img5} src="/Flex-Images/5.png" alt="" />
            <img className={styles.img6} src="/Flex-Images/6.png" alt="" />
        </div>
    );
}

export default Flex;