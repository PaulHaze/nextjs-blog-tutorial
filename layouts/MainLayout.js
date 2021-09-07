import { NavBar } from '../components';
import styles from './MainLayout.module.css';

export default function MainLayout({ children }) {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>{children}</div>
    </div>
  );
}
