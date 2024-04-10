import styles from './Navbar.module.css';
import { IoMdMenu } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.menu}>
            <IoMdMenu />
            </div>
            <div className={styles.stack}>
                <p>Home</p>
                <p>Collections</p>
                <p>Blog</p>
                <p>About us</p>
                <p>Join now</p>
            </div>
            <div className={styles.user}>
            <FaRegUser/>
            </div>
        </div>
    )
}

export default Navbar;