import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSuperfundProductsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ABN" })
  abn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=USI" })
  usi?: string;
}


export class GetSuperfundProductsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetSuperfundProductsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSuperfundProductsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSuperfundProductsQueryParams;

  @Metadata()
  headers: GetSuperfundProductsHeaders;

  @Metadata()
  security: GetSuperfundProductsSecurity;
}


export class GetSuperfundProductsResponse extends SpeakeasyBase {
  @Metadata()
  apiException?: shared.ApiException;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  superFundProducts?: shared.SuperFundProducts;
}
