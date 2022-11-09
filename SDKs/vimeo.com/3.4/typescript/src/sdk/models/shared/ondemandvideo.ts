import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Picture } from "./picture";
import { User } from "./user";


// OnDemandVideoBuy
/** 
 * Information about purchasing this video.
**/
export class OnDemandVideoBuy extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=price" })
  price: Map<string, any>;

  @Metadata({ data: "json, name=purchased" })
  purchased?: boolean;
}


// OnDemandVideoInteractionsPage
/** 
 * Information about how the authenticated user can interact with the connection to the video's On Demand page.
**/
export class OnDemandVideoInteractionsPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandVideoInteractions
/** 
 * An object containing information about how the authenticated user can interact with this On Demand page.
**/
export class OnDemandVideoInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=page" })
  page: OnDemandVideoInteractionsPage;
}


// OnDemandVideoMetadataConnectionsSeason
/** 
 * Information about this season.
**/
export class OnDemandVideoMetadataConnectionsSeason extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class OnDemandVideoMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=season" })
  season: OnDemandVideoMetadataConnectionsSeason;
}


// OnDemandVideoMetadataInteractionsLikes
/** 
 * Information about the user's Like interactions with this video.
**/
export class OnDemandVideoMetadataInteractionsLikes extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandVideoMetadataInteractionsWatchlater
/** 
 * Information about the user's Watch Later interactions with this video.
**/
export class OnDemandVideoMetadataInteractionsWatchlater extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added: boolean;

  @Metadata({ data: "json, name=added_time" })
  addedTime: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


export class OnDemandVideoMetadataInteractions extends SpeakeasyBase {
  @Metadata({ data: "json, name=likes" })
  likes: OnDemandVideoMetadataInteractionsLikes;

  @Metadata({ data: "json, name=watchlater" })
  watchlater: OnDemandVideoMetadataInteractionsWatchlater;
}


// OnDemandVideoMetadata
/** 
 * Metadata information about this video.
**/
export class OnDemandVideoMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: OnDemandVideoMetadataConnections;

  @Metadata({ data: "json, name=interactions" })
  interactions: OnDemandVideoMetadataInteractions;
}


// OnDemandVideoRent
/** 
 * Information about renting this video.
**/
export class OnDemandVideoRent extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=price" })
  price: Map<string, any>;

  @Metadata({ data: "json, name=purchased" })
  purchased?: boolean;
}

export enum OnDemandVideoTypeEnum {
    Extra = "extra"
,    Main = "main"
,    Trailer = "trailer"
}


export class OnDemandVideo extends SpeakeasyBase {
  @Metadata({ data: "json, name=buy" })
  buy: OnDemandVideoBuy;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=episode" })
  episode?: number;

  @Metadata({ data: "json, name=interactions" })
  interactions: OnDemandVideoInteractions;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: OnDemandVideoMetadata;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=pictures" })
  pictures?: Picture;

  @Metadata({ data: "json, name=play_progress" })
  playProgress: number;

  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=release_date" })
  releaseDate?: string;

  @Metadata({ data: "json, name=release_year" })
  releaseYear: number;

  @Metadata({ data: "json, name=rent" })
  rent: OnDemandVideoRent;

  @Metadata({ data: "json, name=type" })
  type: OnDemandVideoTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=user" })
  user?: User;
}
