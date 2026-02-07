import { Link, useLocation } from 'react-router-dom';
import { Map, Shield, User, Terminal } from 'lucide-react';
import styles from './Sidebar.module.css';
import { clsx } from 'clsx';

const Sidebar = () => {
    const location = useLocation();

    const navItems = [
        { icon: Map, label: 'Learn', path: '/' },
        { icon: Shield, label: 'Leaderboard', path: '/leaderboard' },
        { icon: Terminal, label: 'Practice', path: '/practice' },
        { icon: User, label: 'Profile', path: '/profile' },
    ];

    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <span className={styles.logoIcon}>🐝</span>
                <h1 className="mono">HACKBEE</h1>
            </div>

            <nav className={styles.nav}>
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={clsx(styles.navItem, location.pathname === item.path && styles.active)}
                    >
                        <item.icon size={24} />
                        <span className={styles.navLabel}>{item.label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
