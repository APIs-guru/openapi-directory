import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetinvestorAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;
}


export class GetinvestorAccountHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetinvestorAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetinvestorAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetinvestorAccountPathParams;

  @SpeakeasyMetadata()
  headers: GetinvestorAccountHeaders;

  @SpeakeasyMetadata()
  security: GetinvestorAccountSecurity;
}


export class GetinvestorAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getinvestorAccount200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getinvestorAccount400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getinvestorAccount401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getinvestorAccount403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getinvestorAccount404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getinvestorAccount409ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getinvestorAccount429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getinvestorAccount500ApplicationJsonAny?: any;
}
