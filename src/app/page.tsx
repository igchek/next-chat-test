
import styles from './styles.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.homePage}>
      <Link className={styles.link} href={'/messanger'}>messanger</Link>

    </main>
  )
}
