import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFeedConnectionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreateFeedConnectionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateFeedConnectionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFeedConnectionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.FeedConnections;

  @Metadata()
  security: CreateFeedConnectionsSecurity;
}


export class CreateFeedConnectionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  feedConnections?: shared.FeedConnections;

  @Metadata()
  statusCode: number;
}
