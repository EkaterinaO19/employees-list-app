interface ModalContextProps {
    sortOption: string;
    setSortOption: (sortOption: string) => void;
    search: string;
    setSearch: (search: string) => void;
}

interface PersonInfo{
    id: string;
    avatarUrl: string;
    firstName: string;
    lastName: string;
    position: string;
    birthday: string;
    phone: string;
}

interface Person {
    id: string;
    avatarUrl: string;
    firstName: string;
    lastName: string;
    userTag: string;
    department: string;
    position: string;
    birthday: string;
    phone: string;
}

interface UserCardProps {
    user: UserCard;
}

interface UserCard {
    id: string;
    avatarUrl?: string;
    firstName: string;
    lastName: string;
    userTag: string;
    position: string;
}
