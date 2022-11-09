import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckWatchLaterQueueAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class CheckWatchLaterQueueAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CheckWatchLaterQueueAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: CheckWatchLaterQueueAlt1PathParams;

  @Metadata()
  security: CheckWatchLaterQueueAlt1Security;
}


export class CheckWatchLaterQueueAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  video?: shared.Video;
}
