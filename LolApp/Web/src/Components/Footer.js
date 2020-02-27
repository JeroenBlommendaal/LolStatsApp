import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PublicIcon from '@material-ui/icons/Public';

export default function LabelBottomNavigation() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction label="Recents" value="recents" icon={<PublicIcon />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<PublicIcon />} />
            <BottomNavigationAction label="Nearby" value="nearby" icon={<PublicIcon />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<PublicIcon />} />
        </BottomNavigation>
    );
}