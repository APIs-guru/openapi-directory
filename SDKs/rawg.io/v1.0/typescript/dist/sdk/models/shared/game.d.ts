import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GameEsrbRatingNameEnum {
    Everyone = "Everyone",
    Everyone10Plus = "Everyone 10+",
    Teen = "Teen",
    Mature = "Mature",
    AdultsOnly = "Adults Only",
    RatingPending = "Rating Pending"
}
export declare enum GameEsrbRatingSlugEnum {
    Everyone = "everyone",
    Everyone10Plus = "everyone-10-plus",
    Teen = "teen",
    Mature = "mature",
    AdultsOnly = "adults-only",
    RatingPending = "rating-pending"
}
export declare class GameEsrbRating extends SpeakeasyBase {
    id?: number;
    name?: GameEsrbRatingNameEnum;
    slug?: GameEsrbRatingSlugEnum;
}
export declare class GamePlatformsPlatform extends SpeakeasyBase {
    id?: number;
    name?: string;
    slug?: string;
}
export declare class GamePlatformsRequirements extends SpeakeasyBase {
    minimum?: string;
    recommended?: string;
}
export declare class GamePlatforms extends SpeakeasyBase {
    platform?: GamePlatformsPlatform;
    releasedAt?: string;
    requirements?: GamePlatformsRequirements;
}
export declare class Game extends SpeakeasyBase {
    added?: number;
    addedByStatus?: Map<string, any>;
    backgroundImage?: string;
    esrbRating?: GameEsrbRating;
    id?: number;
    metacritic?: number;
    name?: string;
    platforms?: GamePlatforms[];
    playtime?: number;
    rating: number;
    ratingTop?: number;
    ratings?: Map<string, any>;
    ratingsCount?: number;
    released?: Date;
    reviewsTextCount?: string;
    slug?: string;
    suggestionsCount?: number;
    tba?: boolean;
    updated?: Date;
}
