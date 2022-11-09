import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GamePlatformMetacritic } from "./gameplatformmetacritic";

export enum GameSingleEsrbRatingNameEnum {
    Everyone = "Everyone"
,    Everyone10Plus = "Everyone 10+"
,    Teen = "Teen"
,    Mature = "Mature"
,    AdultsOnly = "Adults Only"
,    RatingPending = "Rating Pending"
}

export enum GameSingleEsrbRatingSlugEnum {
    Everyone = "everyone"
,    Everyone10Plus = "everyone-10-plus"
,    Teen = "teen"
,    Mature = "mature"
,    AdultsOnly = "adults-only"
,    RatingPending = "rating-pending"
}


export class GameSingleEsrbRating extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: GameSingleEsrbRatingNameEnum;

  @Metadata({ data: "json, name=slug" })
  slug?: GameSingleEsrbRatingSlugEnum;
}


export class GameSinglePlatformsPlatform extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=slug" })
  slug?: string;
}


export class GameSinglePlatformsRequirements extends SpeakeasyBase {
  @Metadata({ data: "json, name=minimum" })
  minimum?: string;

  @Metadata({ data: "json, name=recommended" })
  recommended?: string;
}


export class GameSinglePlatforms extends SpeakeasyBase {
  @Metadata({ data: "json, name=platform" })
  platform?: GameSinglePlatformsPlatform;

  @Metadata({ data: "json, name=released_at" })
  releasedAt?: string;

  @Metadata({ data: "json, name=requirements" })
  requirements?: GameSinglePlatformsRequirements;
}


export class GameSingle extends SpeakeasyBase {
  @Metadata({ data: "json, name=achievements_count" })
  achievementsCount?: number;

  @Metadata({ data: "json, name=added" })
  added?: number;

  @Metadata({ data: "json, name=added_by_status" })
  addedByStatus?: Map<string, any>;

  @Metadata({ data: "json, name=additions_count" })
  additionsCount?: number;

  @Metadata({ data: "json, name=alternative_names" })
  alternativeNames?: string[];

  @Metadata({ data: "json, name=background_image" })
  backgroundImage?: string;

  @Metadata({ data: "json, name=background_image_additional" })
  backgroundImageAdditional?: string;

  @Metadata({ data: "json, name=creators_count" })
  creatorsCount?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=esrb_rating" })
  esrbRating?: GameSingleEsrbRating;

  @Metadata({ data: "json, name=game_series_count" })
  gameSeriesCount?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=metacritic" })
  metacritic?: number;

  @Metadata({ data: "json, name=metacritic_platforms", elemType: shared.GamePlatformMetacritic })
  metacriticPlatforms?: GamePlatformMetacritic[];

  @Metadata({ data: "json, name=metacritic_url" })
  metacriticUrl?: string;

  @Metadata({ data: "json, name=movies_count" })
  moviesCount?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=name_original" })
  nameOriginal?: string;

  @Metadata({ data: "json, name=parent_achievements_count" })
  parentAchievementsCount?: string;

  @Metadata({ data: "json, name=parents_count" })
  parentsCount?: number;

  @Metadata({ data: "json, name=platforms", elemType: shared.GameSinglePlatforms })
  platforms?: GameSinglePlatforms[];

  @Metadata({ data: "json, name=playtime" })
  playtime?: number;

  @Metadata({ data: "json, name=rating" })
  rating: number;

  @Metadata({ data: "json, name=rating_top" })
  ratingTop?: number;

  @Metadata({ data: "json, name=ratings" })
  ratings?: Map<string, any>;

  @Metadata({ data: "json, name=ratings_count" })
  ratingsCount?: number;

  @Metadata({ data: "json, name=reactions" })
  reactions?: Map<string, any>;

  @Metadata({ data: "json, name=reddit_count" })
  redditCount?: number;

  @Metadata({ data: "json, name=reddit_description" })
  redditDescription?: string;

  @Metadata({ data: "json, name=reddit_logo" })
  redditLogo?: string;

  @Metadata({ data: "json, name=reddit_name" })
  redditName?: string;

  @Metadata({ data: "json, name=reddit_url" })
  redditUrl?: string;

  @Metadata({ data: "json, name=released" })
  released?: Date;

  @Metadata({ data: "json, name=reviews_text_count" })
  reviewsTextCount?: string;

  @Metadata({ data: "json, name=screenshots_count" })
  screenshotsCount?: number;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=suggestions_count" })
  suggestionsCount?: number;

  @Metadata({ data: "json, name=tba" })
  tba?: boolean;

  @Metadata({ data: "json, name=twitch_count" })
  twitchCount?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=website" })
  website?: string;

  @Metadata({ data: "json, name=youtube_count" })
  youtubeCount?: string;
}
