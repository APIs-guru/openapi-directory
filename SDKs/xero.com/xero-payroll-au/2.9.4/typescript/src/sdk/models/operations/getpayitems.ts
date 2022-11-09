import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayItemsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=where" })
  where?: string;
}


export class GetPayItemsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetPayItemsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetPayItemsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPayItemsQueryParams;

  @Metadata()
  headers: GetPayItemsHeaders;

  @Metadata()
  security: GetPayItemsSecurity;
}


export class GetPayItemsResponse extends SpeakeasyBase {
  @Metadata()
  apiException?: shared.ApiException;

  @Metadata()
  contentType: string;

  @Metadata()
  payItems?: shared.PayItems;

  @Metadata()
  statusCode: number;
}
