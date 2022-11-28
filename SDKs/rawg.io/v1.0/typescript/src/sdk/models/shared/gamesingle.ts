import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GamePlatformMetacritic } from "./gameplatformmetacritic";


export enum GameSingleEsrbRatingNameEnum {
    Everyone = "Everyone",
    Everyone10Plus = "Everyone 10+",
    Teen = "Teen",
    Mature = "Mature",
    AdultsOnly = "Adults Only",
    RatingPending = "Rating Pending"
}

export enum GameSingleEsrbRatingSlugEnum {
    Everyone = "everyone",
    Everyone10Plus = "everyone-10-plus",
    Teen = "teen",
    Mature = "mature",
    AdultsOnly = "adults-only",
    RatingPending = "rating-pending"
}


export class GameSingleEsrbRating extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: GameSingleEsrbRatingNameEnum;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: GameSingleEsrbRatingSlugEnum;
}


export class GameSinglePlatformsPlatform extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;
}


export class GameSinglePlatformsRequirements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minimum" })
  minimum?: string;

  @SpeakeasyMetadata({ data: "json, name=recommended" })
  recommended?: string;
}


export class GameSinglePlatforms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: GameSinglePlatformsPlatform;

  @SpeakeasyMetadata({ data: "json, name=released_at" })
  releasedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=requirements" })
  requirements?: GameSinglePlatformsRequirements;
}


export class GameSingle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=achievements_count" })
  achievementsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=added" })
  added?: number;

  @SpeakeasyMetadata({ data: "json, name=added_by_status" })
  addedByStatus?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=additions_count" })
  additionsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=alternative_names" })
  alternativeNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=background_image" })
  backgroundImage?: string;

  @SpeakeasyMetadata({ data: "json, name=background_image_additional" })
  backgroundImageAdditional?: string;

  @SpeakeasyMetadata({ data: "json, name=creators_count" })
  creatorsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=esrb_rating" })
  esrbRating?: GameSingleEsrbRating;

  @SpeakeasyMetadata({ data: "json, name=game_series_count" })
  gameSeriesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=metacritic" })
  metacritic?: number;

  @SpeakeasyMetadata({ data: "json, name=metacritic_platforms", elemType: GamePlatformMetacritic })
  metacriticPlatforms?: GamePlatformMetacritic[];

  @SpeakeasyMetadata({ data: "json, name=metacritic_url" })
  metacriticUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=movies_count" })
  moviesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=name_original" })
  nameOriginal?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_achievements_count" })
  parentAchievementsCount?: string;

  @SpeakeasyMetadata({ data: "json, name=parents_count" })
  parentsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=platforms", elemType: GameSinglePlatforms })
  platforms?: GameSinglePlatforms[];

  @SpeakeasyMetadata({ data: "json, name=playtime" })
  playtime?: number;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating: number;

  @SpeakeasyMetadata({ data: "json, name=rating_top" })
  ratingTop?: number;

  @SpeakeasyMetadata({ data: "json, name=ratings" })
  ratings?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ratings_count" })
  ratingsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=reactions" })
  reactions?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=reddit_count" })
  redditCount?: number;

  @SpeakeasyMetadata({ data: "json, name=reddit_description" })
  redditDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=reddit_logo" })
  redditLogo?: string;

  @SpeakeasyMetadata({ data: "json, name=reddit_name" })
  redditName?: string;

  @SpeakeasyMetadata({ data: "json, name=reddit_url" })
  redditUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=released" })
  released?: Date;

  @SpeakeasyMetadata({ data: "json, name=reviews_text_count" })
  reviewsTextCount?: string;

  @SpeakeasyMetadata({ data: "json, name=screenshots_count" })
  screenshotsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestions_count" })
  suggestionsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=tba" })
  tba?: boolean;

  @SpeakeasyMetadata({ data: "json, name=twitch_count" })
  twitchCount?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;

  @SpeakeasyMetadata({ data: "json, name=youtube_count" })
  youtubeCount?: string;
}
