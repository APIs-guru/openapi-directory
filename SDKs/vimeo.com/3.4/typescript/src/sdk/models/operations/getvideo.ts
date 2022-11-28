import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoPathParams;
}


export class GetVideoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  video?: shared.Video;
}
