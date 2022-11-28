import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditVideoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class EditVideoRequestBodyEmbedButtons extends SpeakeasyBase {
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


export class EditVideoRequestBodyEmbedLogosCustom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=sticky" })
  sticky?: boolean;
}


export class EditVideoRequestBodyEmbedLogos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: EditVideoRequestBodyEmbedLogosCustom;

  @SpeakeasyMetadata({ data: "json, name=vimeo" })
  vimeo?: boolean;
}

export enum EditVideoRequestBodyEmbedTitleNameEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}

export enum EditVideoRequestBodyEmbedTitleOwnerEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}

export enum EditVideoRequestBodyEmbedTitlePortraitEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}


export class EditVideoRequestBodyEmbedTitle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: EditVideoRequestBodyEmbedTitleNameEnum;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: EditVideoRequestBodyEmbedTitleOwnerEnum;

  @SpeakeasyMetadata({ data: "json, name=portrait" })
  portrait?: EditVideoRequestBodyEmbedTitlePortraitEnum;
}


export class EditVideoRequestBodyEmbed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buttons" })
  buttons?: EditVideoRequestBodyEmbedButtons;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=logos" })
  logos?: EditVideoRequestBodyEmbedLogos;

  @SpeakeasyMetadata({ data: "json, name=playbar" })
  playbar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: EditVideoRequestBodyEmbedTitle;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume?: boolean;
}

export enum EditVideoRequestBodyLicenseEnum {
    By = "by",
    ByNc = "by-nc",
    ByNcNd = "by-nc-nd",
    ByNcSa = "by-nc-sa",
    ByNd = "by-nd",
    BySa = "by-sa",
    Cc0 = "cc0"
}

export enum EditVideoRequestBodyPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}

export enum EditVideoRequestBodyPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}

export enum EditVideoRequestBodyPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}


export class EditVideoRequestBodyPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add" })
  add?: boolean;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: EditVideoRequestBodyPrivacyCommentsEnum;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed?: EditVideoRequestBodyPrivacyEmbedEnum;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: EditVideoRequestBodyPrivacyViewEnum;
}

export enum EditVideoRequestBodyRatingsMpaaReasonEnum {
    At = "at",
    Bn = "bn",
    N = "n",
    Sl = "sl",
    Ss = "ss",
    V = "v"
}


export class EditVideoRequestBodyRatingsMpaa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: EditVideoRequestBodyRatingsMpaaReasonEnum;
}

export enum EditVideoRequestBodyRatingsTvReasonEnum {
    D = "d",
    Fv = "fv",
    L = "l",
    Ss = "ss",
    V = "v"
}


export class EditVideoRequestBodyRatingsTv extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: EditVideoRequestBodyRatingsTvReasonEnum;
}


export class EditVideoRequestBodyRatings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mpaa" })
  mpaa?: EditVideoRequestBodyRatingsMpaa;

  @SpeakeasyMetadata({ data: "json, name=tv" })
  tv?: EditVideoRequestBodyRatingsTv;
}


export class EditVideoRequestBodyReviewPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;
}


export class EditVideoRequestBodySpatialDirectorTimeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pitch" })
  pitch: number;

  @SpeakeasyMetadata({ data: "json, name=roll" })
  roll?: number;

  @SpeakeasyMetadata({ data: "json, name=time_code" })
  timeCode: number;

  @SpeakeasyMetadata({ data: "json, name=yaw" })
  yaw: number;
}

export enum EditVideoRequestBodySpatialProjectionEnum {
    Cubical = "cubical",
    Cylindrical = "cylindrical",
    Dome = "dome",
    Equirectangular = "equirectangular",
    Pyramid = "pyramid"
}

export enum EditVideoRequestBodySpatialStereoFormatEnum {
    LeftRight = "left-right",
    Mono = "mono",
    TopBottom = "top-bottom"
}


export class EditVideoRequestBodySpatial extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=director_timeline", elemType: EditVideoRequestBodySpatialDirectorTimeline })
  directorTimeline?: EditVideoRequestBodySpatialDirectorTimeline[];

  @SpeakeasyMetadata({ data: "json, name=field_of_view" })
  fieldOfView?: number;

  @SpeakeasyMetadata({ data: "json, name=projection" })
  projection?: EditVideoRequestBodySpatialProjectionEnum;

  @SpeakeasyMetadata({ data: "json, name=stereo_format" })
  stereoFormat?: EditVideoRequestBodySpatialStereoFormatEnum;
}


export class EditVideoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_rating" })
  contentRating?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed?: EditVideoRequestBodyEmbed;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: EditVideoRequestBodyLicenseEnum;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: EditVideoRequestBodyPrivacy;

  @SpeakeasyMetadata({ data: "json, name=ratings" })
  ratings?: EditVideoRequestBodyRatings;

  @SpeakeasyMetadata({ data: "json, name=review_page" })
  reviewPage?: EditVideoRequestBodyReviewPage;

  @SpeakeasyMetadata({ data: "json, name=spatial" })
  spatial?: EditVideoRequestBodySpatial;
}


export class EditVideoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditVideoPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.video+json" })
  request: EditVideoRequestBody;

  @SpeakeasyMetadata()
  security: EditVideoSecurity;
}


export class EditVideoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  video?: shared.Video;
}
