import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Contact us</p>
      <p className={styles.para}>
        Ready for a space adventure like no other? Join Atom Space, where your
        work can revolutionize the entire industry. Click below – destiny
        beckons.
      </p>
      <button className={styles.find}>
        <p>Fill the form</p>
      </button>
    </div>
  );
}

export default Contact;
