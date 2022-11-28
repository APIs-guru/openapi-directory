import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFeedConnectionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetFeedConnectionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetFeedConnectionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetFeedConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFeedConnectionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetFeedConnectionsHeaders;

  @SpeakeasyMetadata()
  security: GetFeedConnectionsSecurity;
}


export class GetFeedConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  feedConnections?: shared.FeedConnections;

  @SpeakeasyMetadata()
  statusCode: number;
}
