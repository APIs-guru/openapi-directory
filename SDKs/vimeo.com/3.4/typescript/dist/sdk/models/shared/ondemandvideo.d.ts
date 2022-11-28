import { SpeakeasyBase } from "../../../internal/utils";
import { Picture } from "./picture";
import { User } from "./user";
/**
 * Information about purchasing this video.
**/
export declare class OnDemandVideoBuy extends SpeakeasyBase {
    active: boolean;
    price: Map<string, any>;
    purchased?: boolean;
}
/**
 * Information about how the authenticated user can interact with the connection to the video's On Demand page.
**/
export declare class OnDemandVideoInteractionsPage extends SpeakeasyBase {
    added: boolean;
    options: string[];
    uri: string;
}
/**
 * An object containing information about how the authenticated user can interact with this On Demand page.
**/
export declare class OnDemandVideoInteractions extends SpeakeasyBase {
    page: OnDemandVideoInteractionsPage;
}
/**
 * Information about this season.
**/
export declare class OnDemandVideoMetadataConnectionsSeason extends SpeakeasyBase {
    name: string;
    options: string[];
    uri: string;
}
export declare class OnDemandVideoMetadataConnections extends SpeakeasyBase {
    season: OnDemandVideoMetadataConnectionsSeason;
}
/**
 * Information about the user's Like interactions with this video.
**/
export declare class OnDemandVideoMetadataInteractionsLikes extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    uri: string;
}
/**
 * Information about the user's Watch Later interactions with this video.
**/
export declare class OnDemandVideoMetadataInteractionsWatchlater extends SpeakeasyBase {
    added: boolean;
    addedTime: string;
    uri: string;
}
export declare class OnDemandVideoMetadataInteractions extends SpeakeasyBase {
    likes: OnDemandVideoMetadataInteractionsLikes;
    watchlater: OnDemandVideoMetadataInteractionsWatchlater;
}
/**
 * Metadata information about this video.
**/
export declare class OnDemandVideoMetadata extends SpeakeasyBase {
    connections: OnDemandVideoMetadataConnections;
    interactions: OnDemandVideoMetadataInteractions;
}
/**
 * Information about renting this video.
**/
export declare class OnDemandVideoRent extends SpeakeasyBase {
    active: boolean;
    price: Map<string, any>;
    purchased?: boolean;
}
export declare enum OnDemandVideoTypeEnum {
    Extra = "extra",
    Main = "main",
    Trailer = "trailer"
}
export declare class OnDemandVideo extends SpeakeasyBase {
    buy: OnDemandVideoBuy;
    description?: string;
    duration?: string;
    episode?: number;
    interactions: OnDemandVideoInteractions;
    link: string;
    metadata: OnDemandVideoMetadata;
    name?: string;
    options?: string[];
    pictures?: Picture;
    playProgress: number;
    position?: number;
    releaseDate?: string;
    releaseYear: number;
    rent: OnDemandVideoRent;
    type: OnDemandVideoTypeEnum;
    uri: string;
    user?: User;
}
