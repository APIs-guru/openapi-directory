import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditTextTrackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=texttrack_id" })
  texttrackId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}

export enum EditTextTrackRequestBodyTypeEnum {
    Captions = "captions",
    Chapters = "chapters",
    Descriptions = "descriptions",
    Metadata = "metadata",
    Subtitles = "subtitles"
}


export class EditTextTrackRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: EditTextTrackRequestBodyTypeEnum;
}


export class EditTextTrackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditTextTrackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditTextTrackPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.video.texttrack+json" })
  request?: EditTextTrackRequestBody;

  @SpeakeasyMetadata()
  security: EditTextTrackSecurity;
}


export class EditTextTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  textTrack?: shared.TextTrack;
}
