import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteVideoFromWatchLaterAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class DeleteVideoFromWatchLaterAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteVideoFromWatchLaterAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVideoFromWatchLaterAlt1PathParams;

  @Metadata()
  security: DeleteVideoFromWatchLaterAlt1Security;
}


export class DeleteVideoFromWatchLaterAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
