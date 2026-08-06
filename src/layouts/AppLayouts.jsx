// shared shell with the real, clickable bottom tab bar

import {Outlet, NavLink} from "react-router-dom";

// One entry per tab. "path" it must match a route defined in App.jsx.
const TABS = [
    { label: "Home", path: "/dashboard" },
    { label: "Savings", path: "/plans/new" },
    { label: "Groups", path: "/groups" },
    { label: "Shop", path: "/marketplace" },
    { label: "Profile", path: "/profile" },
];

export default function AppLayout() {
    return (
        <div className="min-h-screen bg-page">
            {/* This is where the actual page content renders, based on the URL */}
            <Outlet />

            {/* Bottom tab bar - with the real navigation instead of static text */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-line">
                <div className="max-w-2xl mx-auto flex justify-around py-3 text-xs">
                    {TABS.map((tab) => (
                        // navLink: to detect if the currently active page.
                        <NavLink
                            key={tab.path}
                            to={tab.path}
                            className={({isActive}) =>
                            isActive ? "text-ink font-semibold" : "text-ink-muted"
                        }
                        >
                            {tab.label}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </div>
    );
}