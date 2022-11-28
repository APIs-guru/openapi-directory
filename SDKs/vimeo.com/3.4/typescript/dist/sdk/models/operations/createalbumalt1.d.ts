import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAlbumAlt1RequestBodyLayoutEnum {
    Grid = "grid",
    Player = "player"
}
export declare enum CreateAlbumAlt1RequestBodyPrivacyEnum {
    Anybody = "anybody",
    EmbedOnly = "embed_only",
    Password = "password"
}
export declare enum CreateAlbumAlt1RequestBodySortEnum {
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
export declare enum CreateAlbumAlt1RequestBodyThemeEnum {
    Dark = "dark",
    Standard = "standard"
}
export declare class CreateAlbumAlt1RequestBody extends SpeakeasyBase {
    brandColor?: string;
    description?: string;
    hideNav?: boolean;
    layout?: CreateAlbumAlt1RequestBodyLayoutEnum;
    name: string;
    password?: string;
    privacy?: CreateAlbumAlt1RequestBodyPrivacyEnum;
    reviewMode?: boolean;
    sort?: CreateAlbumAlt1RequestBodySortEnum;
    theme?: CreateAlbumAlt1RequestBodyThemeEnum;
}
export declare class CreateAlbumAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateAlbumAlt1Request extends SpeakeasyBase {
    request: CreateAlbumAlt1RequestBody;
    security: CreateAlbumAlt1Security;
}
export declare class CreateAlbumAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    album?: shared.Album;
    legacyError?: shared.LegacyError;
}
