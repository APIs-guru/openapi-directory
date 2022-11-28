import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditAlbumPathParams extends SpeakeasyBase {
    albumId: number;
    userId: number;
}
export declare enum EditAlbumRequestBodyLayoutEnum {
    Grid = "grid",
    Player = "player"
}
export declare enum EditAlbumRequestBodyPrivacyEnum {
    Anybody = "anybody",
    EmbedOnly = "embed_only",
    Password = "password"
}
export declare enum EditAlbumRequestBodySortEnum {
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
export declare enum EditAlbumRequestBodyThemeEnum {
    Dark = "dark",
    Standard = "standard"
}
export declare class EditAlbumRequestBody extends SpeakeasyBase {
    brandColor?: string;
    description?: string;
    domain?: string;
    hideNav?: boolean;
    layout?: EditAlbumRequestBodyLayoutEnum;
    name?: string;
    password?: string;
    privacy?: EditAlbumRequestBodyPrivacyEnum;
    reviewMode?: boolean;
    sort?: EditAlbumRequestBodySortEnum;
    theme?: EditAlbumRequestBodyThemeEnum;
    url?: string;
    useCustomDomain?: boolean;
}
export declare class EditAlbumSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class EditAlbumRequest extends SpeakeasyBase {
    pathParams: EditAlbumPathParams;
    request?: EditAlbumRequestBody;
    security: EditAlbumSecurity;
}
export declare class EditAlbumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    album?: shared.Album;
    legacyError?: shared.LegacyError;
}
