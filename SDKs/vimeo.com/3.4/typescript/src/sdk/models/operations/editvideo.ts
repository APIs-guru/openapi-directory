import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EditVideoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class EditVideoRequestBodyEmbedButtons extends SpeakeasyBase {
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


export class EditVideoRequestBodyEmbedLogosCustom extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=sticky" })
  sticky?: boolean;
}


export class EditVideoRequestBodyEmbedLogos extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom" })
  custom?: EditVideoRequestBodyEmbedLogosCustom;

  @Metadata({ data: "json, name=vimeo" })
  vimeo?: boolean;
}

export enum EditVideoRequestBodyEmbedTitleNameEnum {
    Hide = "hide"
,    Show = "show"
,    User = "user"
}

export enum EditVideoRequestBodyEmbedTitleOwnerEnum {
    Hide = "hide"
,    Show = "show"
,    User = "user"
}

export enum EditVideoRequestBodyEmbedTitlePortraitEnum {
    Hide = "hide"
,    Show = "show"
,    User = "user"
}


export class EditVideoRequestBodyEmbedTitle extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: EditVideoRequestBodyEmbedTitleNameEnum;

  @Metadata({ data: "json, name=owner" })
  owner?: EditVideoRequestBodyEmbedTitleOwnerEnum;

  @Metadata({ data: "json, name=portrait" })
  portrait?: EditVideoRequestBodyEmbedTitlePortraitEnum;
}


export class EditVideoRequestBodyEmbed extends SpeakeasyBase {
  @Metadata({ data: "json, name=buttons" })
  buttons?: EditVideoRequestBodyEmbedButtons;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=logos" })
  logos?: EditVideoRequestBodyEmbedLogos;

  @Metadata({ data: "json, name=playbar" })
  playbar?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: EditVideoRequestBodyEmbedTitle;

  @Metadata({ data: "json, name=volume" })
  volume?: boolean;
}

export enum EditVideoRequestBodyLicenseEnum {
    By = "by"
,    ByNc = "by-nc"
,    ByNcNd = "by-nc-nd"
,    ByNcSa = "by-nc-sa"
,    ByNd = "by-nd"
,    BySa = "by-sa"
,    Cc0 = "cc0"
}

export enum EditVideoRequestBodyPrivacyCommentsEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Nobody = "nobody"
}

export enum EditVideoRequestBodyPrivacyEmbedEnum {
    Private = "private"
,    Public = "public"
,    Whitelist = "whitelist"
}

export enum EditVideoRequestBodyPrivacyViewEnum {
    Anybody = "anybody"
,    Contacts = "contacts"
,    Disable = "disable"
,    Nobody = "nobody"
,    Password = "password"
,    Unlisted = "unlisted"
,    Users = "users"
}


export class EditVideoRequestBodyPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add?: boolean;

  @Metadata({ data: "json, name=comments" })
  comments?: EditVideoRequestBodyPrivacyCommentsEnum;

  @Metadata({ data: "json, name=download" })
  download?: boolean;

  @Metadata({ data: "json, name=embed" })
  embed?: EditVideoRequestBodyPrivacyEmbedEnum;

  @Metadata({ data: "json, name=view" })
  view?: EditVideoRequestBodyPrivacyViewEnum;
}

export enum EditVideoRequestBodyRatingsMpaaReasonEnum {
    At = "at"
,    Bn = "bn"
,    N = "n"
,    Sl = "sl"
,    Ss = "ss"
,    V = "v"
}


export class EditVideoRequestBodyRatingsMpaa extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: EditVideoRequestBodyRatingsMpaaReasonEnum;
}

export enum EditVideoRequestBodyRatingsTvReasonEnum {
    D = "d"
,    Fv = "fv"
,    L = "l"
,    Ss = "ss"
,    V = "v"
}


export class EditVideoRequestBodyRatingsTv extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: EditVideoRequestBodyRatingsTvReasonEnum;
}


export class EditVideoRequestBodyRatings extends SpeakeasyBase {
  @Metadata({ data: "json, name=mpaa" })
  mpaa?: EditVideoRequestBodyRatingsMpaa;

  @Metadata({ data: "json, name=tv" })
  tv?: EditVideoRequestBodyRatingsTv;
}


export class EditVideoRequestBodyReviewPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;
}


export class EditVideoRequestBodySpatialDirectorTimeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=pitch" })
  pitch: number;

  @Metadata({ data: "json, name=roll" })
  roll?: number;

  @Metadata({ data: "json, name=time_code" })
  timeCode: number;

  @Metadata({ data: "json, name=yaw" })
  yaw: number;
}

export enum EditVideoRequestBodySpatialProjectionEnum {
    Cubical = "cubical"
,    Cylindrical = "cylindrical"
,    Dome = "dome"
,    Equirectangular = "equirectangular"
,    Pyramid = "pyramid"
}

export enum EditVideoRequestBodySpatialStereoFormatEnum {
    LeftRight = "left-right"
,    Mono = "mono"
,    TopBottom = "top-bottom"
}


export class EditVideoRequestBodySpatial extends SpeakeasyBase {
  @Metadata({ data: "json, name=director_timeline", elemType: operations.EditVideoRequestBodySpatialDirectorTimeline })
  directorTimeline?: EditVideoRequestBodySpatialDirectorTimeline[];

  @Metadata({ data: "json, name=field_of_view" })
  fieldOfView?: number;

  @Metadata({ data: "json, name=projection" })
  projection?: EditVideoRequestBodySpatialProjectionEnum;

  @Metadata({ data: "json, name=stereo_format" })
  stereoFormat?: EditVideoRequestBodySpatialStereoFormatEnum;
}


export class EditVideoRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_rating" })
  contentRating?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=embed" })
  embed?: EditVideoRequestBodyEmbed;

  @Metadata({ data: "json, name=license" })
  license?: EditVideoRequestBodyLicenseEnum;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=privacy" })
  privacy?: EditVideoRequestBodyPrivacy;

  @Metadata({ data: "json, name=ratings" })
  ratings?: EditVideoRequestBodyRatings;

  @Metadata({ data: "json, name=review_page" })
  reviewPage?: EditVideoRequestBodyReviewPage;

  @Metadata({ data: "json, name=spatial" })
  spatial?: EditVideoRequestBodySpatial;
}


export class EditVideoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditVideoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EditVideoPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.video+json" })
  request: EditVideoRequestBody;

  @Metadata()
  security: EditVideoSecurity;
}


export class EditVideoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  video?: shared.Video;
}
