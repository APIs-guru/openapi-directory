import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteFeedConnectionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class DeleteFeedConnectionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteFeedConnectionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteFeedConnectionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.FeedConnections;

  @Metadata()
  security: DeleteFeedConnectionsSecurity;
}


export class DeleteFeedConnectionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  feedConnections?: shared.FeedConnections;

  @Metadata()
  statusCode: number;
}
