import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=where" })
  where?: string;
}


export class GetPayItemsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetPayItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetPayItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPayItemsQueryParams;

  @SpeakeasyMetadata()
  headers: GetPayItemsHeaders;

  @SpeakeasyMetadata()
  security: GetPayItemsSecurity;
}


export class GetPayItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiException?: shared.ApiException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payItems?: shared.PayItems;

  @SpeakeasyMetadata()
  statusCode: number;
}
