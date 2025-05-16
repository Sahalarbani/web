export const calculateAverageRating = (ratings: number[]): number => {
    if (ratings.length === 0) return 0;
    const total = ratings.reduce((acc, rating) => acc + rating, 0);
    return parseFloat((total / ratings.length).toFixed(1));
};

export const isValidRating = (rating: number): boolean => {
    return rating >= 1 && rating <= 5;
};

export const formatRating = (rating: number): string => {
    return `${rating} out of 5 stars`;
};