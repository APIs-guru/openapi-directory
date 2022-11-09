import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTextTrackAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}

export enum CreateTextTrackAlt1RequestBodyTypeEnum {
    Captions = "captions"
,    Chapters = "chapters"
,    Descriptions = "descriptions"
,    Metadata = "metadata"
,    Subtitles = "subtitles"
}


export class CreateTextTrackAlt1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=language" })
  language: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: CreateTextTrackAlt1RequestBodyTypeEnum;
}


export class CreateTextTrackAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateTextTrackAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateTextTrackAlt1PathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.video.texttrack+json" })
  request: CreateTextTrackAlt1RequestBody;

  @Metadata()
  security: CreateTextTrackAlt1Security;
}


export class CreateTextTrackAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  textTrack?: shared.TextTrack;
}
