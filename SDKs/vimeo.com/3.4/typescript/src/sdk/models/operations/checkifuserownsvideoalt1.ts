import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CheckIfUserOwnsVideoAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class CheckIfUserOwnsVideoAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CheckIfUserOwnsVideoAlt1PathParams;
}


export class CheckIfUserOwnsVideoAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  video?: shared.Video;
}
