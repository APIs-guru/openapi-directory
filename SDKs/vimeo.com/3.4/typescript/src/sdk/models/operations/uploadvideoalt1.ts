import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadVideoAlt1RequestBodyEmbedButtons extends SpeakeasyBase {
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


export class UploadVideoAlt1RequestBodyEmbedLogosCustom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=sticky" })
  sticky?: boolean;
}


export class UploadVideoAlt1RequestBodyEmbedLogos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: UploadVideoAlt1RequestBodyEmbedLogosCustom;

  @SpeakeasyMetadata({ data: "json, name=vimeo" })
  vimeo?: boolean;
}

export enum UploadVideoAlt1RequestBodyEmbedTitleNameEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}

export enum UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}

export enum UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}


export class UploadVideoAlt1RequestBodyEmbedTitle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: UploadVideoAlt1RequestBodyEmbedTitleNameEnum;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: UploadVideoAlt1RequestBodyEmbedTitleOwnerEnum;

  @SpeakeasyMetadata({ data: "json, name=portrait" })
  portrait?: UploadVideoAlt1RequestBodyEmbedTitlePortraitEnum;
}


export class UploadVideoAlt1RequestBodyEmbed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buttons" })
  buttons?: UploadVideoAlt1RequestBodyEmbedButtons;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=logos" })
  logos?: UploadVideoAlt1RequestBodyEmbedLogos;

  @SpeakeasyMetadata({ data: "json, name=playbar" })
  playbar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: UploadVideoAlt1RequestBodyEmbedTitle;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume?: boolean;
}

export enum UploadVideoAlt1RequestBodyLicenseEnum {
    By = "by",
    ByNc = "by-nc",
    ByNcNd = "by-nc-nd",
    ByNcSa = "by-nc-sa",
    ByNd = "by-nd",
    BySa = "by-sa",
    Cc0 = "cc0"
}

export enum UploadVideoAlt1RequestBodyPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}

export enum UploadVideoAlt1RequestBodyPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}

export enum UploadVideoAlt1RequestBodyPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}


export class UploadVideoAlt1RequestBodyPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add" })
  add?: boolean;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: UploadVideoAlt1RequestBodyPrivacyCommentsEnum;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed?: UploadVideoAlt1RequestBodyPrivacyEmbedEnum;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: UploadVideoAlt1RequestBodyPrivacyViewEnum;
}

export enum UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum {
    At = "at",
    Bn = "bn",
    N = "n",
    Sl = "sl",
    Ss = "ss",
    V = "v"
}


export class UploadVideoAlt1RequestBodyRatingsMpaa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum;
}

export enum UploadVideoAlt1RequestBodyRatingsTvReasonEnum {
    D = "d",
    Fv = "fv",
    L = "l",
    Ss = "ss",
    V = "v"
}


export class UploadVideoAlt1RequestBodyRatingsTv extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: UploadVideoAlt1RequestBodyRatingsTvReasonEnum;
}


export class UploadVideoAlt1RequestBodyRatings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mpaa" })
  mpaa?: UploadVideoAlt1RequestBodyRatingsMpaa;

  @SpeakeasyMetadata({ data: "json, name=tv" })
  tv?: UploadVideoAlt1RequestBodyRatingsTv;
}


export class UploadVideoAlt1RequestBodyReviewPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;
}


export class UploadVideoAlt1RequestBodySpatialDirectorTimeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pitch" })
  pitch: number;

  @SpeakeasyMetadata({ data: "json, name=roll" })
  roll?: number;

  @SpeakeasyMetadata({ data: "json, name=time_code" })
  timeCode: number;

  @SpeakeasyMetadata({ data: "json, name=yaw" })
  yaw: number;
}

export enum UploadVideoAlt1RequestBodySpatialProjectionEnum {
    Cubical = "cubical",
    Cylindrical = "cylindrical",
    Dome = "dome",
    Equirectangular = "equirectangular",
    Pyramid = "pyramid"
}

export enum UploadVideoAlt1RequestBodySpatialStereoFormatEnum {
    LeftRight = "left-right",
    Mono = "mono",
    TopBottom = "top-bottom"
}


export class UploadVideoAlt1RequestBodySpatial extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=director_timeline", elemType: UploadVideoAlt1RequestBodySpatialDirectorTimeline })
  directorTimeline?: UploadVideoAlt1RequestBodySpatialDirectorTimeline[];

  @SpeakeasyMetadata({ data: "json, name=field_of_view" })
  fieldOfView?: number;

  @SpeakeasyMetadata({ data: "json, name=projection" })
  projection?: UploadVideoAlt1RequestBodySpatialProjectionEnum;

  @SpeakeasyMetadata({ data: "json, name=stereo_format" })
  stereoFormat?: UploadVideoAlt1RequestBodySpatialStereoFormatEnum;
}

export enum UploadVideoAlt1RequestBodyUploadApproachEnum {
    Post = "post",
    Pull = "pull",
    Streaming = "streaming",
    Tus = "tus"
}


export class UploadVideoAlt1RequestBodyUpload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approach" })
  approach: UploadVideoAlt1RequestBodyUploadApproachEnum;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=redirect_url" })
  redirectUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;
}


export class UploadVideoAlt1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_rating" })
  contentRating?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed?: UploadVideoAlt1RequestBodyEmbed;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: UploadVideoAlt1RequestBodyLicenseEnum;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: UploadVideoAlt1RequestBodyPrivacy;

  @SpeakeasyMetadata({ data: "json, name=ratings" })
  ratings?: UploadVideoAlt1RequestBodyRatings;

  @SpeakeasyMetadata({ data: "json, name=review_page" })
  reviewPage?: UploadVideoAlt1RequestBodyReviewPage;

  @SpeakeasyMetadata({ data: "json, name=spatial" })
  spatial?: UploadVideoAlt1RequestBodySpatial;

  @SpeakeasyMetadata({ data: "json, name=upload" })
  upload: UploadVideoAlt1RequestBodyUpload;
}


export class UploadVideoAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.video+json" })
  request: UploadVideoAlt1RequestBody;
}


export class UploadVideoAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  video?: shared.Video;
}
