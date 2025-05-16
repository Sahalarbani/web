// src/types/index.ts

export interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    thumbnail: string;
    description: string;
    rating: number;
    category: string;
    tags: string[];
    author: Author;
    createdAt: string;
    updatedAt: string;
}

export interface Author {
    id: string;
    username: string;
    name: string;
    bio: string;
    avatar: string;
}

export interface Comment {
    id: string;
    postId: string;
    author: string;
    content: string;
    createdAt: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
}

export interface Tag {
    id: string;
    name: string;
    slug: string;
}

// Rating interface for star ratings
export interface Rating {
    postId: string;
    userId: string;
    value: number; // 1 to 5
}