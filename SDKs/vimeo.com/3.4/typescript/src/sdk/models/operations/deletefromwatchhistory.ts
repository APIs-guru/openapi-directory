import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteFromWatchHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class DeleteFromWatchHistorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteFromWatchHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFromWatchHistoryPathParams;

  @Metadata()
  security: DeleteFromWatchHistorySecurity;
}


export class DeleteFromWatchHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
