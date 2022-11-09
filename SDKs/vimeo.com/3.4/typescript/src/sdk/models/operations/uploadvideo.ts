import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadVideoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class UploadVideoRequestBodyEmbedButtons extends SpeakeasyBase {
  @Metadata({ data: "json, name=embed" })
  embed?: boolean;

  @Metadata({ data: "json, name=fullscreen" })
  fullscreen?: boolean;

  @Metadata({ data: "json, name=hd" })
  hd?: boolean;

  @Metadata({ data: "json, name=like" })
  like?: boolean;

  @Metadata({ data: "json, name=scaling" })
  scaling?: boolean;

  @Metadata({ data: "json, name=share" })
  share?: boolean;

  @Metadata({ data: "json, name=watchlater" })
  watchlater?: boolean;
}


export class UploadVideoRequestBodyEmbedLogosCustom extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=sticky" })
  sticky?: boolean;
}


export class UploadVideoRequestBodyEmbedLogos extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom" })
  custom?: UploadVideoRequestBodyEmbedLogosCustom;

  @Metadata({ data: "json, name=vimeo" })
  vimeo?: boolean;
}

export enum UploadVideoRequestBodyEmbedTitleNameEnum {
    Hide = "hide"
,    Show = "show"
,    User = "user"
}

export enum UploadVideoRequestBodyEmbedTitleOwnerEnum {
    Hide = "hide"
,    Show = "show"
,    User = "user"
}

export enum UploadVideoRequestBodyEmbedTitlePortraitEnum {
    Hide = "hide"
,    Show = "show"
,    User = "user"
}


export class UploadVideoRequestBodyEmbedTitle extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: UploadVideoRequestBodyEmbedTitleNameEnum;

  @Metadata({ data: "json, name=owner" })
  owner?: UploadVideoRequestBodyEmbedTitleOwnerEnum;

  @Metadata({ data: "json, name=portrait" })
  portrait?: UploadVideoRequestBodyEmbedTitlePortraitEnum;
}


export class UploadVideoRequestBodyEmbed extends SpeakeasyBase {
  @Metadata({ data: "json, name=buttons" })
  buttons?: UploadVideoRequestBodyEmbedButtons;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=logos" })
  logos?: UploadVideoRequestBodyEmbedLogos;

  @Metadata({ data: "json, name=playbar" })
  playbar?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: UploadVideoRequestBodyEmbedTitle;

  @Metadata({ data: "json, name=volume" })
  volume?: boolean;
}

export enum UploadVideoRequestBodyLicenseEnum {
    By = "by"
,    ByNc = "by-nc"
,    ByNcNd = "by-nc-nd"
,    ByNcSa = "by-nc-sa"
,    ByNd = "by-nd"
,    BySa = "by-sa"
,    Cc0 = "cc0"
}

export enum UploadVideoRequestBodyPrivacyCommentsEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Nobody = "nobody"
}

export enum UploadVideoRequestBodyPrivacyEmbedEnum {
    Private = "private"
,    Public = "public"
,    Whitelist = "whitelist"
}

export enum UploadVideoRequestBodyPrivacyViewEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Disable = "disable"
,    Nobody = "nobody"
,    Password = "password"
,    Unlisted = "unlisted"
,    Users = "users"
}


export class UploadVideoRequestBodyPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add?: boolean;

  @Metadata({ data: "json, name=comments" })
  comments?: UploadVideoRequestBodyPrivacyCommentsEnum;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=embed" })
  embed?: UploadVideoRequestBodyPrivacyEmbedEnum;

  @Metadata({ data: "json, name=view" })
  view?: UploadVideoRequestBodyPrivacyViewEnum;
}

export enum UploadVideoRequestBodyRatingsMpaaReasonEnum {
    At = "at"
,    Bn = "bn"
,    N = "n"
,    Sl = "sl"
,    Ss = "ss"
,    V = "v"
}


export class UploadVideoRequestBodyRatingsMpaa extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: UploadVideoRequestBodyRatingsMpaaReasonEnum;
}

export enum UploadVideoRequestBodyRatingsTvReasonEnum {
    D = "d"
,    Fv = "fv"
,    L = "l"
,    Ss = "ss"
,    V = "v"
}


export class UploadVideoRequestBodyRatingsTv extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: UploadVideoRequestBodyRatingsTvReasonEnum;
}


export class UploadVideoRequestBodyRatings extends SpeakeasyBase {
  @Metadata({ data: "json, name=mpaa" })
  mpaa?: UploadVideoRequestBodyRatingsMpaa;

  @Metadata({ data: "json, name=tv" })
  tv?: UploadVideoRequestBodyRatingsTv;
}


export class UploadVideoRequestBodyReviewPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;
}


export class UploadVideoRequestBodySpatialDirectorTimeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=pitch" })
  pitch: number;

  @Metadata({ data: "json, name=roll" })
  roll?: number;

  @Metadata({ data: "json, name=time_code" })
  timeCode: number;

  @Metadata({ data: "json, name=yaw" })
  yaw: number;
}

export enum UploadVideoRequestBodySpatialProjectionEnum {
    Cubical = "cubical"
,    Cylindrical = "cylindrical"
,    Dome = "dome"
,    Equirectangular = "equirectangular"
,    Pyramid = "pyramid"
}

export enum UploadVideoRequestBodySpatialStereoFormatEnum {
    LeftRight = "left-right"
,    Mono = "mono"
,    TopBottom = "top-bottom"
}


export class UploadVideoRequestBodySpatial extends SpeakeasyBase {
  @Metadata({ data: "json, name=director_timeline", elemType: operations.UploadVideoRequestBodySpatialDirectorTimeline })
  directorTimeline?: UploadVideoRequestBodySpatialDirectorTimeline[];

  @Metadata({ data: "json, name=field_of_view" })
  fieldOfView?: number;

  @Metadata({ data: "json, name=projection" })
  projection?: UploadVideoRequestBodySpatialProjectionEnum;

  @Metadata({ data: "json, name=stereo_format" })
  stereoFormat?: UploadVideoRequestBodySpatialStereoFormatEnum;
}

export enum UploadVideoRequestBodyUploadApproachEnum {
    Post = "post"
,    Pull = "pull"
,    Streaming = "streaming"
,    Tus = "tus"
}


export class UploadVideoRequestBodyUpload extends SpeakeasyBase {
  @Metadata({ data: "json, name=approach" })
  approach: UploadVideoRequestBodyUploadApproachEnum;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=redirect_url" })
  redirectUrl?: string;

  @Metadata({ data: "json, name=size" })
  size?: string;
}


export class UploadVideoRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_rating" })
  contentRating?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=embed" })
  embed?: UploadVideoRequestBodyEmbed;

  @Metadata({ data: "json, name=license" })
  license?: UploadVideoRequestBodyLicenseEnum;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=privacy" })
  privacy?: UploadVideoRequestBodyPrivacy;

  @Metadata({ data: "json, name=ratings" })
  ratings?: UploadVideoRequestBodyRatings;

  @Metadata({ data: "json, name=review_page" })
  reviewPage?: UploadVideoRequestBodyReviewPage;

  @Metadata({ data: "json, name=spatial" })
  spatial?: UploadVideoRequestBodySpatial;

  @Metadata({ data: "json, name=upload" })
  upload: UploadVideoRequestBodyUpload;
}


export class UploadVideoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UploadVideoPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.video+json" })
  request: UploadVideoRequestBody;
}


export class UploadVideoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  video?: shared.Video;
}
