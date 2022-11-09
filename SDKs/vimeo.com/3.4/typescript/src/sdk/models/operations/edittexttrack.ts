import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EditTextTrackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=texttrack_id" })
  texttrackId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}

export enum EditTextTrackRequestBodyTypeEnum {
    Captions = "captions"
,    Chapters = "chapters"
,    Descriptions = "descriptions"
,    Metadata = "metadata"
,    Subtitles = "subtitles"
}


export class EditTextTrackRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: EditTextTrackRequestBodyTypeEnum;
}


export class EditTextTrackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditTextTrackRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EditTextTrackPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.video.texttrack+json" })
  request?: EditTextTrackRequestBody;

  @Metadata()
  security: EditTextTrackSecurity;
}


export class EditTextTrackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  textTrack?: shared.TextTrack;
}
