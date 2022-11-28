import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadVideoPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class UploadVideoRequestBodyEmbedButtons extends SpeakeasyBase {
    embed?: boolean;
    fullscreen?: boolean;
    hd?: boolean;
    like?: boolean;
    scaling?: boolean;
    share?: boolean;
    watchlater?: boolean;
}
export declare class UploadVideoRequestBodyEmbedLogosCustom extends SpeakeasyBase {
    active?: boolean;
    link?: string;
    sticky?: boolean;
}
export declare class UploadVideoRequestBodyEmbedLogos extends SpeakeasyBase {
    custom?: UploadVideoRequestBodyEmbedLogosCustom;
    vimeo?: boolean;
}
export declare enum UploadVideoRequestBodyEmbedTitleNameEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
export declare enum UploadVideoRequestBodyEmbedTitleOwnerEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
export declare enum UploadVideoRequestBodyEmbedTitlePortraitEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
export declare class UploadVideoRequestBodyEmbedTitle extends SpeakeasyBase {
    name?: UploadVideoRequestBodyEmbedTitleNameEnum;
    owner?: UploadVideoRequestBodyEmbedTitleOwnerEnum;
    portrait?: UploadVideoRequestBodyEmbedTitlePortraitEnum;
}
export declare class UploadVideoRequestBodyEmbed extends SpeakeasyBase {
    buttons?: UploadVideoRequestBodyEmbedButtons;
    color?: string;
    logos?: UploadVideoRequestBodyEmbedLogos;
    playbar?: boolean;
    title?: UploadVideoRequestBodyEmbedTitle;
    volume?: boolean;
}
export declare enum UploadVideoRequestBodyLicenseEnum {
    By = "by",
    ByNc = "by-nc",
    ByNcNd = "by-nc-nd",
    ByNcSa = "by-nc-sa",
    ByNd = "by-nd",
    BySa = "by-sa",
    Cc0 = "cc0"
}
export declare enum UploadVideoRequestBodyPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
export declare enum UploadVideoRequestBodyPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
export declare enum UploadVideoRequestBodyPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class UploadVideoRequestBodyPrivacy extends SpeakeasyBase {
    add?: boolean;
    comments?: UploadVideoRequestBodyPrivacyCommentsEnum;
    download?: boolean;
    embed?: UploadVideoRequestBodyPrivacyEmbedEnum;
    view?: UploadVideoRequestBodyPrivacyViewEnum;
}
export declare enum UploadVideoRequestBodyRatingsMpaaReasonEnum {
    At = "at",
    Bn = "bn",
    N = "n",
    Sl = "sl",
    Ss = "ss",
    V = "v"
}
export declare class UploadVideoRequestBodyRatingsMpaa extends SpeakeasyBase {
    reason?: UploadVideoRequestBodyRatingsMpaaReasonEnum;
}
export declare enum UploadVideoRequestBodyRatingsTvReasonEnum {
    D = "d",
    Fv = "fv",
    L = "l",
    Ss = "ss",
    V = "v"
}
export declare class UploadVideoRequestBodyRatingsTv extends SpeakeasyBase {
    reason?: UploadVideoRequestBodyRatingsTvReasonEnum;
}
export declare class UploadVideoRequestBodyRatings extends SpeakeasyBase {
    mpaa?: UploadVideoRequestBodyRatingsMpaa;
    tv?: UploadVideoRequestBodyRatingsTv;
}
export declare class UploadVideoRequestBodyReviewPage extends SpeakeasyBase {
    active?: boolean;
}
export declare class UploadVideoRequestBodySpatialDirectorTimeline extends SpeakeasyBase {
    pitch: number;
    roll?: number;
    timeCode: number;
    yaw: number;
}
export declare enum UploadVideoRequestBodySpatialProjectionEnum {
    Cubical = "cubical",
    Cylindrical = "cylindrical",
    Dome = "dome",
    Equirectangular = "equirectangular",
    Pyramid = "pyramid"
}
export declare enum UploadVideoRequestBodySpatialStereoFormatEnum {
    LeftRight = "left-right",
    Mono = "mono",
    TopBottom = "top-bottom"
}
export declare class UploadVideoRequestBodySpatial extends SpeakeasyBase {
    directorTimeline?: UploadVideoRequestBodySpatialDirectorTimeline[];
    fieldOfView?: number;
    projection?: UploadVideoRequestBodySpatialProjectionEnum;
    stereoFormat?: UploadVideoRequestBodySpatialStereoFormatEnum;
}
export declare enum UploadVideoRequestBodyUploadApproachEnum {
    Post = "post",
    Pull = "pull",
    Streaming = "streaming",
    Tus = "tus"
}
export declare class UploadVideoRequestBodyUpload extends SpeakeasyBase {
    approach: UploadVideoRequestBodyUploadApproachEnum;
    link?: string;
    redirectUrl?: string;
    size?: string;
}
export declare class UploadVideoRequestBody extends SpeakeasyBase {
    contentRating?: string[];
    description?: string;
    embed?: UploadVideoRequestBodyEmbed;
    license?: UploadVideoRequestBodyLicenseEnum;
    locale?: string;
    name?: string;
    password?: string;
    privacy?: UploadVideoRequestBodyPrivacy;
    ratings?: UploadVideoRequestBodyRatings;
    reviewPage?: UploadVideoRequestBodyReviewPage;
    spatial?: UploadVideoRequestBodySpatial;
    upload: UploadVideoRequestBodyUpload;
}
export declare class UploadVideoRequest extends SpeakeasyBase {
    pathParams: UploadVideoPathParams;
    request: UploadVideoRequestBody;
}
export declare class UploadVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    video?: shared.Video;
}
