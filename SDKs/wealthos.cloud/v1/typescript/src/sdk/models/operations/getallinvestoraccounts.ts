import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllinvestorAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=financial_product_id" })
  financialProductId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=investor_id" })
  investorId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;
}


export class GetAllinvestorAccountsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetAllinvestorAccountsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


// GetAllinvestorAccounts200ApplicationJson
/** 
 * Array of investor accounts
**/
export class GetAllinvestorAccounts200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=investor_accounts" })
  investorAccounts?: any[];

  @SpeakeasyMetadata({ data: "json, name=next_page_available" })
  nextPageAvailable?: boolean;
}


export class GetAllinvestorAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllinvestorAccountsQueryParams;

  @SpeakeasyMetadata()
  headers: GetAllinvestorAccountsHeaders;

  @SpeakeasyMetadata()
  security: GetAllinvestorAccountsSecurity;
}


export class GetAllinvestorAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAllinvestorAccounts200ApplicationJsonObject?: GetAllinvestorAccounts200ApplicationJson;

  @SpeakeasyMetadata()
  getAllinvestorAccounts400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllinvestorAccounts401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllinvestorAccounts403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllinvestorAccounts404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllinvestorAccounts409ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllinvestorAccounts429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getAllinvestorAccounts500ApplicationJsonAny?: any;
}
