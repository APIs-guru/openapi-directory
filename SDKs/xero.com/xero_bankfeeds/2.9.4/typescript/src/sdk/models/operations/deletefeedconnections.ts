import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteFeedConnectionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class DeleteFeedConnectionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteFeedConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteFeedConnectionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FeedConnections;

  @SpeakeasyMetadata()
  security: DeleteFeedConnectionsSecurity;
}


export class DeleteFeedConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  feedConnections?: shared.FeedConnections;

  @SpeakeasyMetadata()
  statusCode: number;
}
