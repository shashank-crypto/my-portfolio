// create a navbar component that can be used on all pages

import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/NavBar.module.css'

export default function NavBar() {
    const router = useRouter()
    const { pathname } = router

    const showLinks = () => {
        const links = document.querySelector(`.${styles.links}`)
        links?.classList.toggle(styles.ham)
    }
    
    const links = <ul className={styles.links} onClick={showLinks}>
        <li>
        <Link href="/">
            <span className={pathname == '/' ? styles.active : ''}>Home</span>
        </Link>
        </li>
        <li>
        <Link href="/about">
            <span className={pathname == '/about' ? styles.active : ''}>About</span>
        </Link>
        </li>
        <li>
        <Link href="/projects">
            <span className={pathname == '/projects' ? styles.active : ''}>Projects</span>
        </Link>
        </li>
        <li>
        <Link href="/contact">
            <span className={pathname == '/contact' ? styles.active : ''}>Contact</span>
        </Link>
        </li>
    </ul>

    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>
                Sc.
            </h1>
            <div className={styles.hamburger}>
                <img src="burger.png" onClick={showLinks}/>
                {links}
            </div>
        </nav>
    )
    }