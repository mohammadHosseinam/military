
export const handleNavigation = (navigate, url) => {
    navigate(url);
};

// Check if the current path is active
export const isActive = (location, path) => location.pathname === path;