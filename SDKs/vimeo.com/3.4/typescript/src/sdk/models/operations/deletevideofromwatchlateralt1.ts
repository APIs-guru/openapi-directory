import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteVideoFromWatchLaterAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class DeleteVideoFromWatchLaterAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteVideoFromWatchLaterAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVideoFromWatchLaterAlt1PathParams;

  @SpeakeasyMetadata()
  security: DeleteVideoFromWatchLaterAlt1Security;
}


export class DeleteVideoFromWatchLaterAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
