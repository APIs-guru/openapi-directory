import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GameEsrbRatingNameEnum {
    Everyone = "Everyone",
    Everyone10Plus = "Everyone 10+",
    Teen = "Teen",
    Mature = "Mature",
    AdultsOnly = "Adults Only",
    RatingPending = "Rating Pending"
}

export enum GameEsrbRatingSlugEnum {
    Everyone = "everyone",
    Everyone10Plus = "everyone-10-plus",
    Teen = "teen",
    Mature = "mature",
    AdultsOnly = "adults-only",
    RatingPending = "rating-pending"
}


export class GameEsrbRating extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: GameEsrbRatingNameEnum;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: GameEsrbRatingSlugEnum;
}


export class GamePlatformsPlatform extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;
}


export class GamePlatformsRequirements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minimum" })
  minimum?: string;

  @SpeakeasyMetadata({ data: "json, name=recommended" })
  recommended?: string;
}


export class GamePlatforms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: GamePlatformsPlatform;

  @SpeakeasyMetadata({ data: "json, name=released_at" })
  releasedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=requirements" })
  requirements?: GamePlatformsRequirements;
}


export class Game extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added?: number;

  @SpeakeasyMetadata({ data: "json, name=added_by_status" })
  addedByStatus?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=background_image" })
  backgroundImage?: string;

  @SpeakeasyMetadata({ data: "json, name=esrb_rating" })
  esrbRating?: GameEsrbRating;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=metacritic" })
  metacritic?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=platforms", elemType: GamePlatforms })
  platforms?: GamePlatforms[];

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

  @SpeakeasyMetadata({ data: "json, name=released" })
  released?: Date;

  @SpeakeasyMetadata({ data: "json, name=reviews_text_count" })
  reviewsTextCount?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestions_count" })
  suggestionsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=tba" })
  tba?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
