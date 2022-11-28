import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadVideoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class UploadVideoRequestBodyEmbedButtons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fullscreen" })
  fullscreen?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hd" })
  hd?: boolean;

  @SpeakeasyMetadata({ data: "json, name=like" })
  like?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scaling" })
  scaling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=share" })
  share?: boolean;

  @SpeakeasyMetadata({ data: "json, name=watchlater" })
  watchlater?: boolean;
}


export class UploadVideoRequestBodyEmbedLogosCustom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=sticky" })
  sticky?: boolean;
}


export class UploadVideoRequestBodyEmbedLogos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: UploadVideoRequestBodyEmbedLogosCustom;

  @SpeakeasyMetadata({ data: "json, name=vimeo" })
  vimeo?: boolean;
}

export enum UploadVideoRequestBodyEmbedTitleNameEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}

export enum UploadVideoRequestBodyEmbedTitleOwnerEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}

export enum UploadVideoRequestBodyEmbedTitlePortraitEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}


export class UploadVideoRequestBodyEmbedTitle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: UploadVideoRequestBodyEmbedTitleNameEnum;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: UploadVideoRequestBodyEmbedTitleOwnerEnum;

  @SpeakeasyMetadata({ data: "json, name=portrait" })
  portrait?: UploadVideoRequestBodyEmbedTitlePortraitEnum;
}


export class UploadVideoRequestBodyEmbed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buttons" })
  buttons?: UploadVideoRequestBodyEmbedButtons;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=logos" })
  logos?: UploadVideoRequestBodyEmbedLogos;

  @SpeakeasyMetadata({ data: "json, name=playbar" })
  playbar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: UploadVideoRequestBodyEmbedTitle;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume?: boolean;
}

export enum UploadVideoRequestBodyLicenseEnum {
    By = "by",
    ByNc = "by-nc",
    ByNcNd = "by-nc-nd",
    ByNcSa = "by-nc-sa",
    ByNd = "by-nd",
    BySa = "by-sa",
    Cc0 = "cc0"
}

export enum UploadVideoRequestBodyPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}

export enum UploadVideoRequestBodyPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}

export enum UploadVideoRequestBodyPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}


export class UploadVideoRequestBodyPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add" })
  add?: boolean;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: UploadVideoRequestBodyPrivacyCommentsEnum;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed?: UploadVideoRequestBodyPrivacyEmbedEnum;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: UploadVideoRequestBodyPrivacyViewEnum;
}

export enum UploadVideoRequestBodyRatingsMpaaReasonEnum {
    At = "at",
    Bn = "bn",
    N = "n",
    Sl = "sl",
    Ss = "ss",
    V = "v"
}


export class UploadVideoRequestBodyRatingsMpaa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: UploadVideoRequestBodyRatingsMpaaReasonEnum;
}

export enum UploadVideoRequestBodyRatingsTvReasonEnum {
    D = "d",
    Fv = "fv",
    L = "l",
    Ss = "ss",
    V = "v"
}


export class UploadVideoRequestBodyRatingsTv extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: UploadVideoRequestBodyRatingsTvReasonEnum;
}


export class UploadVideoRequestBodyRatings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mpaa" })
  mpaa?: UploadVideoRequestBodyRatingsMpaa;

  @SpeakeasyMetadata({ data: "json, name=tv" })
  tv?: UploadVideoRequestBodyRatingsTv;
}


export class UploadVideoRequestBodyReviewPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;
}


export class UploadVideoRequestBodySpatialDirectorTimeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pitch" })
  pitch: number;

  @SpeakeasyMetadata({ data: "json, name=roll" })
  roll?: number;

  @SpeakeasyMetadata({ data: "json, name=time_code" })
  timeCode: number;

  @SpeakeasyMetadata({ data: "json, name=yaw" })
  yaw: number;
}

export enum UploadVideoRequestBodySpatialProjectionEnum {
    Cubical = "cubical",
    Cylindrical = "cylindrical",
    Dome = "dome",
    Equirectangular = "equirectangular",
    Pyramid = "pyramid"
}

export enum UploadVideoRequestBodySpatialStereoFormatEnum {
    LeftRight = "left-right",
    Mono = "mono",
    TopBottom = "top-bottom"
}


export class UploadVideoRequestBodySpatial extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=director_timeline", elemType: UploadVideoRequestBodySpatialDirectorTimeline })
  directorTimeline?: UploadVideoRequestBodySpatialDirectorTimeline[];

  @SpeakeasyMetadata({ data: "json, name=field_of_view" })
  fieldOfView?: number;

  @SpeakeasyMetadata({ data: "json, name=projection" })
  projection?: UploadVideoRequestBodySpatialProjectionEnum;

  @SpeakeasyMetadata({ data: "json, name=stereo_format" })
  stereoFormat?: UploadVideoRequestBodySpatialStereoFormatEnum;
}

export enum UploadVideoRequestBodyUploadApproachEnum {
    Post = "post",
    Pull = "pull",
    Streaming = "streaming",
    Tus = "tus"
}


export class UploadVideoRequestBodyUpload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approach" })
  approach: UploadVideoRequestBodyUploadApproachEnum;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=redirect_url" })
  redirectUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;
}


export class UploadVideoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_rating" })
  contentRating?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed?: UploadVideoRequestBodyEmbed;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: UploadVideoRequestBodyLicenseEnum;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: UploadVideoRequestBodyPrivacy;

  @SpeakeasyMetadata({ data: "json, name=ratings" })
  ratings?: UploadVideoRequestBodyRatings;

  @SpeakeasyMetadata({ data: "json, name=review_page" })
  reviewPage?: UploadVideoRequestBodyReviewPage;

  @SpeakeasyMetadata({ data: "json, name=spatial" })
  spatial?: UploadVideoRequestBodySpatial;

  @SpeakeasyMetadata({ data: "json, name=upload" })
  upload: UploadVideoRequestBodyUpload;
}


export class UploadVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadVideoPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.video+json" })
  request: UploadVideoRequestBody;
}


export class UploadVideoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  video?: shared.Video;
}
