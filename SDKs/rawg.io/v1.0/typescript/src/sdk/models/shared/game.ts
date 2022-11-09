import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GameEsrbRatingNameEnum {
    Everyone = "Everyone"
,    Everyone10Plus = "Everyone 10+"
,    Teen = "Teen"
,    Mature = "Mature"
,    AdultsOnly = "Adults Only"
,    RatingPending = "Rating Pending"
}

export enum GameEsrbRatingSlugEnum {
    Everyone = "everyone"
,    Everyone10Plus = "everyone-10-plus"
,    Teen = "teen"
,    Mature = "mature"
,    AdultsOnly = "adults-only"
,    RatingPending = "rating-pending"
}


export class GameEsrbRating extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: GameEsrbRatingNameEnum;

  @Metadata({ data: "json, name=slug" })
  slug?: GameEsrbRatingSlugEnum;
}


export class GamePlatformsPlatform extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=slug" })
  slug?: string;
}


export class GamePlatformsRequirements extends SpeakeasyBase {
  @Metadata({ data: "json, name=minimum" })
  minimum?: string;

  @Metadata({ data: "json, name=recommended" })
  recommended?: string;
}


export class GamePlatforms extends SpeakeasyBase {
  @Metadata({ data: "json, name=platform" })
  platform?: GamePlatformsPlatform;

  @Metadata({ data: "json, name=released_at" })
  releasedAt?: string;

  @Metadata({ data: "json, name=requirements" })
  requirements?: GamePlatformsRequirements;
}


export class Game extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added?: number;

  @Metadata({ data: "json, name=added_by_status" })
  addedByStatus?: Map<string, any>;

  @Metadata({ data: "json, name=background_image" })
  backgroundImage?: string;

  @Metadata({ data: "json, name=esrb_rating" })
  esrbRating?: GameEsrbRating;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=metacritic" })
  metacritic?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=platforms", elemType: shared.GamePlatforms })
  platforms?: GamePlatforms[];

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

  @Metadata({ data: "json, name=released" })
  released?: Date;

  @Metadata({ data: "json, name=reviews_text_count" })
  reviewsTextCount?: string;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=suggestions_count" })
  suggestionsCount?: number;

  @Metadata({ data: "json, name=tba" })
  tba?: boolean;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
