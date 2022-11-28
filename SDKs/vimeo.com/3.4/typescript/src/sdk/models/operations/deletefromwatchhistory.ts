import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteFromWatchHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class DeleteFromWatchHistorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteFromWatchHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteFromWatchHistoryPathParams;

  @SpeakeasyMetadata()
  security: DeleteFromWatchHistorySecurity;
}


export class DeleteFromWatchHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
