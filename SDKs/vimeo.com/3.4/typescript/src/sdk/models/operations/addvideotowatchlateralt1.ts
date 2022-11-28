import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddVideoToWatchLaterAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class AddVideoToWatchLaterAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AddVideoToWatchLaterAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddVideoToWatchLaterAlt1PathParams;

  @SpeakeasyMetadata()
  security: AddVideoToWatchLaterAlt1Security;
}


export class AddVideoToWatchLaterAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
