import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAlbumPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum CreateAlbumRequestBodyLayoutEnum {
    Grid = "grid",
    Player = "player"
}
export declare enum CreateAlbumRequestBodyPrivacyEnum {
    Anybody = "anybody",
    EmbedOnly = "embed_only",
    Password = "password"
}
export declare enum CreateAlbumRequestBodySortEnum {
    AddedFirst = "added_first",
    AddedLast = "added_last",
    Alphabetical = "alphabetical",
    Arranged = "arranged",
    Comments = "comments",
    Likes = "likes",
    Newest = "newest",
    Oldest = "oldest",
    Plays = "plays"
}
export declare enum CreateAlbumRequestBodyThemeEnum {
    Dark = "dark",
    Standard = "standard"
}
export declare class CreateAlbumRequestBody extends SpeakeasyBase {
    brandColor?: string;
    description?: string;
    hideNav?: boolean;
    layout?: CreateAlbumRequestBodyLayoutEnum;
    name: string;
    password?: string;
    privacy?: CreateAlbumRequestBodyPrivacyEnum;
    reviewMode?: boolean;
    sort?: CreateAlbumRequestBodySortEnum;
    theme?: CreateAlbumRequestBodyThemeEnum;
}
export declare class CreateAlbumSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateAlbumRequest extends SpeakeasyBase {
    pathParams: CreateAlbumPathParams;
    request: CreateAlbumRequestBody;
    security: CreateAlbumSecurity;
}
export declare class CreateAlbumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    album?: shared.Album;
    legacyError?: shared.LegacyError;
}
