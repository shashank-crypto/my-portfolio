// create a navbar component that can be used on all pages

import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/NavBar.module.css'

export default function NavBar() {
    const router = useRouter()
    const { pathname } = router
    
    return (
        <nav>
        <ul className={styles.links}>
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
        </nav>
    )
    }