import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTextTrackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=texttrack_id" })
  texttrackId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetTextTrackRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTextTrackPathParams;
}


export class GetTextTrackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  textTrack?: shared.TextTrack;
}
