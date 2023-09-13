import Image from "next/image"
import Link from "next/link"

export default function Header(props) {
    const isInfoPage = typeof window !== "undefined" && window.location.pathname === "/info"

        // <header className={styles.header}>
    return (
        <header className="header">
            <div className="container">
                <Link href="/">
                    <img src="/logos/DevNestLogo.png" />
                    <h1>{props.siteTitle}</h1>
                </Link>
                <div>
                    <Link href={isInfoPage ? "/" : "/info"}>
                        <h1>{isInfoPage ? "close" : "info"}</h1>
                    </Link>
                </div>
            </div>
        </header>
    )
}

