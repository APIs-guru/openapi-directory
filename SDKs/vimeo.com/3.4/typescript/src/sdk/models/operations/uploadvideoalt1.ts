import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadVideoAlt1RequestBodyEmbedButtons extends SpeakeasyBase {
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


export class UploadVideoAlt1RequestBodyEmbedLogosCustom extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=sticky" })
  sticky?: boolean;
}


export class UploadVideoAlt1RequestBodyEmbedLogos extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom" })
  custom?: UploadVideoAlt1RequestBodyEmbedLogosCustom;

  @Metadata({ data: "json, name=vimeo" })
  vimeo?: boolean;
}

export enum UploadVideoAlt1RequestBodyEmbedTitleNameEnum {
    Hide = "hide"
,    Show = "show"
,    User = "user"
}

export enum UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum {
    Hide = "hide"
,    Show = "show"
,    User = "user"
}

export enum UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum {
    Hide = "hide"
,    Show = "show"
,    User = "user"
}


export class UploadVideoAlt1RequestBodyEmbedTitle extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: UploadVideoAlt1RequestBodyEmbedTitleNameEnum;

  @Metadata({ data: "json, name=owner" })
  owner?: UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum;

  @Metadata({ data: "json, name=portrait" })
  portrait?: UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum;
}


export class UploadVideoAlt1RequestBodyEmbed extends SpeakeasyBase {
  @Metadata({ data: "json, name=buttons" })
  buttons?: UploadVideoAlt1RequestBodyEmbedButtons;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=logos" })
  logos?: UploadVideoAlt1RequestBodyEmbedLogos;

  @Metadata({ data: "json, name=playbar" })
  playbar?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: UploadVideoAlt1RequestBodyEmbedTitle;

  @Metadata({ data: "json, name=volume" })
  volume?: boolean;
}

export enum UploadVideoAlt1RequestBodyLicenseEnum {
    By = "by"
,    ByNc = "by-nc"
,    ByNcNd = "by-nc-nd"
,    ByNcSa = "by-nc-sa"
,    ByNd = "by-nd"
,    BySa = "by-sa"
,    Cc0 = "cc0"
}

export enum UploadVideoAlt1RequestBodyPrivacyCommentsEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Nobody = "nobody"
}

export enum UploadVideoAlt1RequestBodyPrivacyEmbedEnum {
    Private = "private"
,    Public = "public"
,    Whitelist = "whitelist"
}

export enum UploadVideoAlt1RequestBodyPrivacyViewEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Disable = "disable"
,    Nobody = "nobody"
,    Password = "password"
,    Unlisted = "unlisted"
,    Users = "users"
}


export class UploadVideoAlt1RequestBodyPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add?: boolean;

  @Metadata({ data: "json, name=comments" })
  comments?: UploadVideoAlt1RequestBodyPrivacyCommentsEnum;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=embed" })
  embed?: UploadVideoAlt1RequestBodyPrivacyEmbedEnum;

  @Metadata({ data: "json, name=view" })
  view?: UploadVideoAlt1RequestBodyPrivacyViewEnum;
}

export enum UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum {
    At = "at"
,    Bn = "bn"
,    N = "n"
,    Sl = "sl"
,    Ss = "ss"
,    V = "v"
}


export class UploadVideoAlt1RequestBodyRatingsMpaa extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum;
}

export enum UploadVideoAlt1RequestBodyRatingsTvReasonEnum {
    D = "d"
,    Fv = "fv"
,    L = "l"
,    Ss = "ss"
,    V = "v"
}


export class UploadVideoAlt1RequestBodyRatingsTv extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: UploadVideoAlt1RequestBodyRatingsTvReasonEnum;
}


export class UploadVideoAlt1RequestBodyRatings extends SpeakeasyBase {
  @Metadata({ data: "json, name=mpaa" })
  mpaa?: UploadVideoAlt1RequestBodyRatingsMpaa;

  @Metadata({ data: "json, name=tv" })
  tv?: UploadVideoAlt1RequestBodyRatingsTv;
}


export class UploadVideoAlt1RequestBodyReviewPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;
}


export class UploadVideoAlt1RequestBodySpatialDirectorTimeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=pitch" })
  pitch: number;

  @Metadata({ data: "json, name=roll" })
  roll?: number;

  @Metadata({ data: "json, name=time_code" })
  timeCode: number;

  @Metadata({ data: "json, name=yaw" })
  yaw: number;
}

export enum UploadVideoAlt1RequestBodySpatialProjectionEnum {
    Cubical = "cubical"
,    Cylindrical = "cylindrical"
,    Dome = "dome"
,    Equirectangular = "equirectangular"
,    Pyramid = "pyramid"
}

export enum UploadVideoAlt1RequestBodySpatialStereoFormatEnum {
    LeftRight = "left-right"
,    Mono = "mono"
,    TopBottom = "top-bottom"
}


export class UploadVideoAlt1RequestBodySpatial extends SpeakeasyBase {
  @Metadata({ data: "json, name=director_timeline", elemType: operations.UploadVideoAlt1RequestBodySpatialDirectorTimeline })
  directorTimeline?: UploadVideoAlt1RequestBodySpatialDirectorTimeline[];

  @Metadata({ data: "json, name=field_of_view" })
  fieldOfView?: number;

  @Metadata({ data: "json, name=projection" })
  projection?: UploadVideoAlt1RequestBodySpatialProjectionEnum;

  @Metadata({ data: "json, name=stereo_format" })
  stereoFormat?: UploadVideoAlt1RequestBodySpatialStereoFormatEnum;
}

export enum UploadVideoAlt1RequestBodyUploadApproachEnum {
    Post = "post"
,    Pull = "pull"
,    Streaming = "streaming"
,    Tus = "tus"
}


export class UploadVideoAlt1RequestBodyUpload extends SpeakeasyBase {
  @Metadata({ data: "json, name=approach" })
  approach: UploadVideoAlt1RequestBodyUploadApproachEnum;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=redirect_url" })
  redirectUrl?: string;

  @Metadata({ data: "json, name=size" })
  size?: string;
}


export class UploadVideoAlt1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_rating" })
  contentRating?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=embed" })
  embed?: UploadVideoAlt1RequestBodyEmbed;

  @Metadata({ data: "json, name=license" })
  license?: UploadVideoAlt1RequestBodyLicenseEnum;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=privacy" })
  privacy?: UploadVideoAlt1RequestBodyPrivacy;

  @Metadata({ data: "json, name=ratings" })
  ratings?: UploadVideoAlt1RequestBodyRatings;

  @Metadata({ data: "json, name=review_page" })
  reviewPage?: UploadVideoAlt1RequestBodyReviewPage;

  @Metadata({ data: "json, name=spatial" })
  spatial?: UploadVideoAlt1RequestBodySpatial;

  @Metadata({ data: "json, name=upload" })
  upload: UploadVideoAlt1RequestBodyUpload;
}


export class UploadVideoAlt1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/vnd.vimeo.video+json" })
  request: UploadVideoAlt1RequestBody;
}


export class UploadVideoAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  video?: shared.Video;
}
