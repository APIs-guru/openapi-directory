import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddVideoToWatchLaterAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class AddVideoToWatchLaterAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AddVideoToWatchLaterAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: AddVideoToWatchLaterAlt1PathParams;

  @Metadata()
  security: AddVideoToWatchLaterAlt1Security;
}


export class AddVideoToWatchLaterAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
