export const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
        return `+${match[1]} (${match[2]}) ${match[3]} ${match[4]} ${match[5]}`;
    }
    return phoneNumber;
};

export const formatDate = (dateString) => {
    const options = {day: 'numeric', month: 'long', year: 'numeric'};
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', options);
};

export const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

export const formatAge = (age) => {
    const lastDigit = age % 10;
    const lastTwoDigits = age % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return `${age} лет`;
    } else if (lastDigit === 1) {
        return `${age} год`;
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return `${age} года`;
    } else {
        return `${age} лет`;
    }
};
