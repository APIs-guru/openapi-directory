import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateTextTrackAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}

export enum CreateTextTrackAlt1RequestBodyTypeEnum {
    Captions = "captions",
    Chapters = "chapters",
    Descriptions = "descriptions",
    Metadata = "metadata",
    Subtitles = "subtitles"
}


export class CreateTextTrackAlt1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateTextTrackAlt1RequestBodyTypeEnum;
}


export class CreateTextTrackAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateTextTrackAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateTextTrackAlt1PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.video.texttrack+json" })
  request: CreateTextTrackAlt1RequestBody;

  @SpeakeasyMetadata()
  security: CreateTextTrackAlt1Security;
}


export class CreateTextTrackAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  textTrack?: shared.TextTrack;
}
