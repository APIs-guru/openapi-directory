import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GamePlatformMetacritic } from "./gameplatformmetacritic";
export declare enum GameSingleEsrbRatingNameEnum {
    Everyone = "Everyone",
    Everyone10Plus = "Everyone 10+",
    Teen = "Teen",
    Mature = "Mature",
    AdultsOnly = "Adults Only",
    RatingPending = "Rating Pending"
}
export declare enum GameSingleEsrbRatingSlugEnum {
    Everyone = "everyone",
    Everyone10Plus = "everyone-10-plus",
    Teen = "teen",
    Mature = "mature",
    AdultsOnly = "adults-only",
    RatingPending = "rating-pending"
}
export declare class GameSingleEsrbRating extends SpeakeasyBase {
    id?: number;
    name?: GameSingleEsrbRatingNameEnum;
    slug?: GameSingleEsrbRatingSlugEnum;
}
export declare class GameSinglePlatformsPlatform extends SpeakeasyBase {
    id?: number;
    name?: string;
    slug?: string;
}
export declare class GameSinglePlatformsRequirements extends SpeakeasyBase {
    minimum?: string;
    recommended?: string;
}
export declare class GameSinglePlatforms extends SpeakeasyBase {
    platform?: GameSinglePlatformsPlatform;
    releasedAt?: string;
    requirements?: GameSinglePlatformsRequirements;
}
export declare class GameSingle extends SpeakeasyBase {
    achievementsCount?: number;
    added?: number;
    addedByStatus?: Map<string, any>;
    additionsCount?: number;
    alternativeNames?: string[];
    backgroundImage?: string;
    backgroundImageAdditional?: string;
    creatorsCount?: number;
    description?: string;
    esrbRating?: GameSingleEsrbRating;
    gameSeriesCount?: number;
    id?: number;
    metacritic?: number;
    metacriticPlatforms?: GamePlatformMetacritic[];
    metacriticUrl?: string;
    moviesCount?: number;
    name?: string;
    nameOriginal?: string;
    parentAchievementsCount?: string;
    parentsCount?: number;
    platforms?: GameSinglePlatforms[];
    playtime?: number;
    rating: number;
    ratingTop?: number;
    ratings?: Map<string, any>;
    ratingsCount?: number;
    reactions?: Map<string, any>;
    redditCount?: number;
    redditDescription?: string;
    redditLogo?: string;
    redditName?: string;
    redditUrl?: string;
    released?: Date;
    reviewsTextCount?: string;
    screenshotsCount?: number;
    slug?: string;
    suggestionsCount?: number;
    tba?: boolean;
    twitchCount?: string;
    updated?: Date;
    website?: string;
    youtubeCount?: string;
}
