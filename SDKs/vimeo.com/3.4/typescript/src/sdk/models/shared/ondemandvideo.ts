import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";
import { User } from "./user";



// OnDemandVideoBuy
/** 
 * Information about purchasing this video.
**/
export class OnDemandVideoBuy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=purchased" })
  purchased?: boolean;
}


// OnDemandVideoInteractionsPage
/** 
 * Information about how the authenticated user can interact with the connection to the video's On Demand page.
**/
export class OnDemandVideoInteractionsPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandVideoInteractions
/** 
 * An object containing information about how the authenticated user can interact with this On Demand page.
**/
export class OnDemandVideoInteractions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=page" })
  page: OnDemandVideoInteractionsPage;
}


// OnDemandVideoMetadataConnectionsSeason
/** 
 * Information about this season.
**/
export class OnDemandVideoMetadataConnectionsSeason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


export class OnDemandVideoMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=season" })
  season: OnDemandVideoMetadataConnectionsSeason;
}


// OnDemandVideoMetadataInteractionsLikes
/** 
 * Information about the user's Like interactions with this video.
**/
export class OnDemandVideoMetadataInteractionsLikes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=added_time" })
  addedTime: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandVideoMetadataInteractionsWatchlater
/** 
 * Information about the user's Watch Later interactions with this video.
**/
export class OnDemandVideoMetadataInteractionsWatchlater extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added: boolean;

  @SpeakeasyMetadata({ data: "json, name=added_time" })
  addedTime: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


export class OnDemandVideoMetadataInteractions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=likes" })
  likes: OnDemandVideoMetadataInteractionsLikes;

  @SpeakeasyMetadata({ data: "json, name=watchlater" })
  watchlater: OnDemandVideoMetadataInteractionsWatchlater;
}


// OnDemandVideoMetadata
/** 
 * Metadata information about this video.
**/
export class OnDemandVideoMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: OnDemandVideoMetadataConnections;

  @SpeakeasyMetadata({ data: "json, name=interactions" })
  interactions: OnDemandVideoMetadataInteractions;
}


// OnDemandVideoRent
/** 
 * Information about renting this video.
**/
export class OnDemandVideoRent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=purchased" })
  purchased?: boolean;
}

export enum OnDemandVideoTypeEnum {
    Extra = "extra",
    Main = "main",
    Trailer = "trailer"
}


export class OnDemandVideo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buy" })
  buy: OnDemandVideoBuy;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=episode" })
  episode?: number;

  @SpeakeasyMetadata({ data: "json, name=interactions" })
  interactions: OnDemandVideoInteractions;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: OnDemandVideoMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string[];

  @SpeakeasyMetadata({ data: "json, name=pictures" })
  pictures?: Picture;

  @SpeakeasyMetadata({ data: "json, name=play_progress" })
  playProgress: number;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=release_date" })
  releaseDate?: string;

  @SpeakeasyMetadata({ data: "json, name=release_year" })
  releaseYear: number;

  @SpeakeasyMetadata({ data: "json, name=rent" })
  rent: OnDemandVideoRent;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: OnDemandVideoTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;
}
