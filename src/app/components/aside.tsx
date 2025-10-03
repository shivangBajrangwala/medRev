'use client'
import Logo from "../../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import menuData from "../../data/menuData";
const Aside = () => {
    return (
        <>
            <aside>
                {/* site logo */}
                <Link className="" href="/">
                    <Image width={90} height={39} aria-label="logo" src={Logo} alt="logo" />
                </Link>
                {/* sidebar links */}
                <nav>
                    <ul className="flex flex-col gap-2">
                        {
                            menuData.map(({ id, menuName, menuIcon }) => (
                                <li key={id}>
                                    <Link href="#" className="flex items-center gap-2" title={menuName}>
                                        <span>{menuIcon}</span>
                                        <span>{menuName}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </aside>
        </>
    )
}
export default Aside;