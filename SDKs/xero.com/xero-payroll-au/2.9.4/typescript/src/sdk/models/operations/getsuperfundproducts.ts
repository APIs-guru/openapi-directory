import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSuperfundProductsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ABN" })
  abn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=USI" })
  usi?: string;
}


export class GetSuperfundProductsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetSuperfundProductsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSuperfundProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSuperfundProductsQueryParams;

  @SpeakeasyMetadata()
  headers: GetSuperfundProductsHeaders;

  @SpeakeasyMetadata()
  security: GetSuperfundProductsSecurity;
}


export class GetSuperfundProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiException?: shared.ApiException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  superFundProducts?: shared.SuperFundProducts;
}
