import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditVideoPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class EditVideoRequestBodyEmbedButtons extends SpeakeasyBase {
    embed?: boolean;
    fullscreen?: boolean;
    hd?: boolean;
    like?: boolean;
    scaling?: boolean;
    share?: boolean;
    watchlater?: boolean;
}
export declare class EditVideoRequestBodyEmbedLogosCustom extends SpeakeasyBase {
    active?: boolean;
    link?: string;
    sticky?: boolean;
}
export declare class EditVideoRequestBodyEmbedLogos extends SpeakeasyBase {
    custom?: EditVideoRequestBodyEmbedLogosCustom;
    vimeo?: boolean;
}
export declare enum EditVideoRequestBodyEmbedTitleNameEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
export declare enum EditVideoRequestBodyEmbedTitleOwnerEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
export declare enum EditVideoRequestBodyEmbedTitlePortraitEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
export declare class EditVideoRequestBodyEmbedTitle extends SpeakeasyBase {
    name?: EditVideoRequestBodyEmbedTitleNameEnum;
    owner?: EditVideoRequestBodyEmbedTitleOwnerEnum;
    portrait?: EditVideoRequestBodyEmbedTitlePortraitEnum;
}
export declare class EditVideoRequestBodyEmbed extends SpeakeasyBase {
    buttons?: EditVideoRequestBodyEmbedButtons;
    color?: string;
    logos?: EditVideoRequestBodyEmbedLogos;
    playbar?: boolean;
    title?: EditVideoRequestBodyEmbedTitle;
    volume?: boolean;
}
export declare enum EditVideoRequestBodyLicenseEnum {
    By = "by",
    ByNc = "by-nc",
    ByNcNd = "by-nc-nd",
    ByNcSa = "by-nc-sa",
    ByNd = "by-nd",
    BySa = "by-sa",
    Cc0 = "cc0"
}
export declare enum EditVideoRequestBodyPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
export declare enum EditVideoRequestBodyPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
export declare enum EditVideoRequestBodyPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class EditVideoRequestBodyPrivacy extends SpeakeasyBase {
    add?: boolean;
    comments?: EditVideoRequestBodyPrivacyCommentsEnum;
    download?: boolean;
    embed?: EditVideoRequestBodyPrivacyEmbedEnum;
    view?: EditVideoRequestBodyPrivacyViewEnum;
}
export declare enum EditVideoRequestBodyRatingsMpaaReasonEnum {
    At = "at",
    Bn = "bn",
    N = "n",
    Sl = "sl",
    Ss = "ss",
    V = "v"
}
export declare class EditVideoRequestBodyRatingsMpaa extends SpeakeasyBase {
    reason?: EditVideoRequestBodyRatingsMpaaReasonEnum;
}
export declare enum EditVideoRequestBodyRatingsTvReasonEnum {
    D = "d",
    Fv = "fv",
    L = "l",
    Ss = "ss",
    V = "v"
}
export declare class EditVideoRequestBodyRatingsTv extends SpeakeasyBase {
    reason?: EditVideoRequestBodyRatingsTvReasonEnum;
}
export declare class EditVideoRequestBodyRatings extends SpeakeasyBase {
    mpaa?: EditVideoRequestBodyRatingsMpaa;
    tv?: EditVideoRequestBodyRatingsTv;
}
export declare class EditVideoRequestBodyReviewPage extends SpeakeasyBase {
    active?: boolean;
}
export declare class EditVideoRequestBodySpatialDirectorTimeline extends SpeakeasyBase {
    pitch: number;
    roll?: number;
    timeCode: number;
    yaw: number;
}
export declare enum EditVideoRequestBodySpatialProjectionEnum {
    Cubical = "cubical",
    Cylindrical = "cylindrical",
    Dome = "dome",
    Equirectangular = "equirectangular",
    Pyramid = "pyramid"
}
export declare enum EditVideoRequestBodySpatialStereoFormatEnum {
    LeftRight = "left-right",
    Mono = "mono",
    TopBottom = "top-bottom"
}
export declare class EditVideoRequestBodySpatial extends SpeakeasyBase {
    directorTimeline?: EditVideoRequestBodySpatialDirectorTimeline[];
    fieldOfView?: number;
    projection?: EditVideoRequestBodySpatialProjectionEnum;
    stereoFormat?: EditVideoRequestBodySpatialStereoFormatEnum;
}
export declare class EditVideoRequestBody extends SpeakeasyBase {
    contentRating?: string[];
    description?: string;
    embed?: EditVideoRequestBodyEmbed;
    license?: EditVideoRequestBodyLicenseEnum;
    locale?: string;
    name?: string;
    password?: string;
    privacy?: EditVideoRequestBodyPrivacy;
    ratings?: EditVideoRequestBodyRatings;
    reviewPage?: EditVideoRequestBodyReviewPage;
    spatial?: EditVideoRequestBodySpatial;
}
export declare class EditVideoSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class EditVideoRequest extends SpeakeasyBase {
    pathParams: EditVideoPathParams;
    request: EditVideoRequestBody;
    security: EditVideoSecurity;
}
export declare class EditVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    video?: shared.Video;
}
