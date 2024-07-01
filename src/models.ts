export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface Profile {
    name: Name;
    email: string;
    picture: Picture;
}

export interface ApiResponse {
    results: Profile[];
}
