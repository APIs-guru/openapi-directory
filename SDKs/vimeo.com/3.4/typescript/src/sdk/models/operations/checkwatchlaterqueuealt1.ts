import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CheckWatchLaterQueueAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class CheckWatchLaterQueueAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CheckWatchLaterQueueAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CheckWatchLaterQueueAlt1PathParams;

  @SpeakeasyMetadata()
  security: CheckWatchLaterQueueAlt1Security;
}


export class CheckWatchLaterQueueAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  video?: shared.Video;
}
