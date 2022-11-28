import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadVideoAlt1RequestBodyEmbedButtons extends SpeakeasyBase {
    embed?: boolean;
    fullscreen?: boolean;
    hd?: boolean;
    like?: boolean;
    scaling?: boolean;
    share?: boolean;
    watchlater?: boolean;
}
export declare class UploadVideoAlt1RequestBodyEmbedLogosCustom extends SpeakeasyBase {
    active?: boolean;
    link?: string;
    sticky?: boolean;
}
export declare class UploadVideoAlt1RequestBodyEmbedLogos extends SpeakeasyBase {
    custom?: UploadVideoAlt1RequestBodyEmbedLogosCustom;
    vimeo?: boolean;
}
export declare enum UploadVideoAlt1RequestBodyEmbedTitleNameEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
export declare enum UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
export declare enum UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
export declare class UploadVideoAlt1RequestBodyEmbedTitle extends SpeakeasyBase {
    name?: UploadVideoAlt1RequestBodyEmbedTitleNameEnum;
    owner?: UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum;
    portrait?: UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum;
}
export declare class UploadVideoAlt1RequestBodyEmbed extends SpeakeasyBase {
    buttons?: UploadVideoAlt1RequestBodyEmbedButtons;
    color?: string;
    logos?: UploadVideoAlt1RequestBodyEmbedLogos;
    playbar?: boolean;
    title?: UploadVideoAlt1RequestBodyEmbedTitle;
    volume?: boolean;
}
export declare enum UploadVideoAlt1RequestBodyLicenseEnum {
    By = "by",
    ByNc = "by-nc",
    ByNcNd = "by-nc-nd",
    ByNcSa = "by-nc-sa",
    ByNd = "by-nd",
    BySa = "by-sa",
    Cc0 = "cc0"
}
export declare enum UploadVideoAlt1RequestBodyPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
export declare enum UploadVideoAlt1RequestBodyPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
export declare enum UploadVideoAlt1RequestBodyPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class UploadVideoAlt1RequestBodyPrivacy extends SpeakeasyBase {
    add?: boolean;
    comments?: UploadVideoAlt1RequestBodyPrivacyCommentsEnum;
    download?: boolean;
    embed?: UploadVideoAlt1RequestBodyPrivacyEmbedEnum;
    view?: UploadVideoAlt1RequestBodyPrivacyViewEnum;
}
export declare enum UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum {
    At = "at",
    Bn = "bn",
    N = "n",
    Sl = "sl",
    Ss = "ss",
    V = "v"
}
export declare class UploadVideoAlt1RequestBodyRatingsMpaa extends SpeakeasyBase {
    reason?: UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum;
}
export declare enum UploadVideoAlt1RequestBodyRatingsTvReasonEnum {
    D = "d",
    Fv = "fv",
    L = "l",
    Ss = "ss",
    V = "v"
}
export declare class UploadVideoAlt1RequestBodyRatingsTv extends SpeakeasyBase {
    reason?: UploadVideoAlt1RequestBodyRatingsTvReasonEnum;
}
export declare class UploadVideoAlt1RequestBodyRatings extends SpeakeasyBase {
    mpaa?: UploadVideoAlt1RequestBodyRatingsMpaa;
    tv?: UploadVideoAlt1RequestBodyRatingsTv;
}
export declare class UploadVideoAlt1RequestBodyReviewPage extends SpeakeasyBase {
    active?: boolean;
}
export declare class UploadVideoAlt1RequestBodySpatialDirectorTimeline extends SpeakeasyBase {
    pitch: number;
    roll?: number;
    timeCode: number;
    yaw: number;
}
export declare enum UploadVideoAlt1RequestBodySpatialProjectionEnum {
    Cubical = "cubical",
    Cylindrical = "cylindrical",
    Dome = "dome",
    Equirectangular = "equirectangular",
    Pyramid = "pyramid"
}
export declare enum UploadVideoAlt1RequestBodySpatialStereoFormatEnum {
    LeftRight = "left-right",
    Mono = "mono",
    TopBottom = "top-bottom"
}
export declare class UploadVideoAlt1RequestBodySpatial extends SpeakeasyBase {
    directorTimeline?: UploadVideoAlt1RequestBodySpatialDirectorTimeline[];
    fieldOfView?: number;
    projection?: UploadVideoAlt1RequestBodySpatialProjectionEnum;
    stereoFormat?: UploadVideoAlt1RequestBodySpatialStereoFormatEnum;
}
export declare enum UploadVideoAlt1RequestBodyUploadApproachEnum {
    Post = "post",
    Pull = "pull",
    Streaming = "streaming",
    Tus = "tus"
}
export declare class UploadVideoAlt1RequestBodyUpload extends SpeakeasyBase {
    approach: UploadVideoAlt1RequestBodyUploadApproachEnum;
    link?: string;
    redirectUrl?: string;
    size?: string;
}
export declare class UploadVideoAlt1RequestBody extends SpeakeasyBase {
    contentRating?: string[];
    description?: string;
    embed?: UploadVideoAlt1RequestBodyEmbed;
    license?: UploadVideoAlt1RequestBodyLicenseEnum;
    locale?: string;
    name?: string;
    password?: string;
    privacy?: UploadVideoAlt1RequestBodyPrivacy;
    ratings?: UploadVideoAlt1RequestBodyRatings;
    reviewPage?: UploadVideoAlt1RequestBodyReviewPage;
    spatial?: UploadVideoAlt1RequestBodySpatial;
    upload: UploadVideoAlt1RequestBodyUpload;
}
export declare class UploadVideoAlt1Request extends SpeakeasyBase {
    request: UploadVideoAlt1RequestBody;
}
export declare class UploadVideoAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    video?: shared.Video;
}
