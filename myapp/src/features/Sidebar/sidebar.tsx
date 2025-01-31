import styles from './sidebar.module.css';

export const SideBar = () => {
    return (
        <div className={styles.body}>
            <img
              src="https://picsum.photos/200/300?random=2"
            />
            <h2>Shark Ninja</h2>
            <p className={styles.description}>
              Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System
            </p>
            <div className={styles.buttons}>
              <span className={styles.button}>
                Pantry
              </span>
              <span className={styles.button}>
                Obsolete
              </span>
              <span className={styles.button}>
                Blender
              </span>
              <span className={styles.button}>
                Lightning Deal
              </span>
            </div>
        </div>
      );

}