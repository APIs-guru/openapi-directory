import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditAlbumAlt1PathParams extends SpeakeasyBase {
    albumId: number;
}
export declare enum EditAlbumAlt1RequestBodyLayoutEnum {
    Grid = "grid",
    Player = "player"
}
export declare enum EditAlbumAlt1RequestBodyPrivacyEnum {
    Anybody = "anybody",
    EmbedOnly = "embed_only",
    Password = "password"
}
export declare enum EditAlbumAlt1RequestBodySortEnum {
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
export declare enum EditAlbumAlt1RequestBodyThemeEnum {
    Dark = "dark",
    Standard = "standard"
}
export declare class EditAlbumAlt1RequestBody extends SpeakeasyBase {
    brandColor?: string;
    description?: string;
    domain?: string;
    hideNav?: boolean;
    layout?: EditAlbumAlt1RequestBodyLayoutEnum;
    name?: string;
    password?: string;
    privacy?: EditAlbumAlt1RequestBodyPrivacyEnum;
    reviewMode?: boolean;
    sort?: EditAlbumAlt1RequestBodySortEnum;
    theme?: EditAlbumAlt1RequestBodyThemeEnum;
    url?: string;
    useCustomDomain?: boolean;
}
export declare class EditAlbumAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class EditAlbumAlt1Request extends SpeakeasyBase {
    pathParams: EditAlbumAlt1PathParams;
    request?: EditAlbumAlt1RequestBody;
    security: EditAlbumAlt1Security;
}
export declare class EditAlbumAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    album?: shared.Album;
    legacyError?: shared.LegacyError;
}
