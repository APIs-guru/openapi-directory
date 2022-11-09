import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTextTrackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}

export enum CreateTextTrackRequestBodyTypeEnum {
    Captions = "captions"
,    Chapters = "chapters"
,    Descriptions = "descriptions"
,    Metadata = "metadata"
,    Subtitles = "subtitles"
}


export class CreateTextTrackRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=language" })
  language: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: CreateTextTrackRequestBodyTypeEnum;
}


export class CreateTextTrackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateTextTrackRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateTextTrackPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.video.texttrack+json" })
  request: CreateTextTrackRequestBody;

  @Metadata()
  security: CreateTextTrackSecurity;
}


export class CreateTextTrackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  textTrack?: shared.TextTrack;
}
