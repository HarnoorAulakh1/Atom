import styles from './Content.module.css';

function Content() {
  return (
    <div className={styles.content}>
        <div className={styles.column}>
            <div className={styles.lorem}>
                <img src="Burst-pucker-2.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur. Et arcu habitasse dignissim turpis faucibus mi sagittis duis tortor. </p>
            </div>
            <button className={styles.find}>
                <p>Find Out</p>
            </button>
        </div>
        <div className={styles.gradient}>
            <p>Lorem ipsum dolor sit amet consectetur. Et arcu habitasse dignissim turpis </p>
        </div>
    </div>
  );
}

export default Content;