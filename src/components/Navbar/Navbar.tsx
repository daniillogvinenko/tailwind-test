import { useState } from "react";
import classes from "./Navbar.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const navLinks: { title: string; href: string }[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/",
    },
    {
        title: "Process",
        href: "/",
    },
    {
        title: "Portfolio",
        href: "/",
    },
    {
        title: "Blog",
        href: "/",
    },
    {
        title: "Services",
        href: "/",
    },
];

export const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setOpen((prev) => !prev);
    };

    const menuVariants = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const linkVariants = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1],
            },
        },
        open: {
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0, 0.55, 0.45, 1],
            },
        },
    };

    const linkContainerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };

    return (
        <header>
            <div onClick={toggleMenu} className="block lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className={classes.container}
                    >
                        <div className={classes.flexCol}>
                            <div className="container">
                                <div className={classes.header}>
                                    <div className="flex items-center">
                                        <div className="w-14 h-14 bg-main rounded-full mr-3"></div>
                                        <div className="text-[32px] leading-10 font-semibold">Brooklyn</div>
                                    </div>
                                    <div onClick={toggleMenu}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18 18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                variants={linkContainerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className={classes.links}
                            >
                                {navLinks.map((link, index) => (
                                    <div key={index} className={classes.linkWrapper}>
                                        <motion.div variants={linkVariants}>
                                            <a className={classes.linkItem} href={link.href}>
                                                {link.title}
                                            </a>
                                        </motion.div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
