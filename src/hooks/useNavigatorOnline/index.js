import {useEffect, useState} from 'react';

export function useNavigatorOnline() {
    const [value, setValue] = useState(null);

    useEffect(() => {
        setValue(window.navigator.onLine);

        function handleOnlineStatus() {
            setValue(window.navigator.onLine);
        }

        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline', handleOnlineStatus);

        return () => {
            window.removeEventListener('online', handleOnlineStatus);
            window.removeEventListener('offline', handleOnlineStatus);
        };
    }, []);

    return {isOnline: value, isOffline: !value};
}
