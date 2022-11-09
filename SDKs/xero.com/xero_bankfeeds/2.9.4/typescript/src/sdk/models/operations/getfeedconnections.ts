import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFeedConnectionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetFeedConnectionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetFeedConnectionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetFeedConnectionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFeedConnectionsQueryParams;

  @Metadata()
  headers: GetFeedConnectionsHeaders;

  @Metadata()
  security: GetFeedConnectionsSecurity;
}


export class GetFeedConnectionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  feedConnections?: shared.FeedConnections;

  @Metadata()
  statusCode: number;
}
