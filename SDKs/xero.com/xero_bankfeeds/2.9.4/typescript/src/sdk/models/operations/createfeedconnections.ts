import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFeedConnectionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreateFeedConnectionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateFeedConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateFeedConnectionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FeedConnections;

  @SpeakeasyMetadata()
  security: CreateFeedConnectionsSecurity;
}


export class CreateFeedConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  feedConnections?: shared.FeedConnections;

  @SpeakeasyMetadata()
  statusCode: number;
}
