import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBankAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bank_account_id" })
  bankAccountId: string;
}


export class GetBankAccountHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetBankAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetBankAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBankAccountPathParams;

  @SpeakeasyMetadata()
  headers: GetBankAccountHeaders;

  @SpeakeasyMetadata()
  security: GetBankAccountSecurity;
}


export class GetBankAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBankAccount200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getBankAccount400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getBankAccount401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getBankAccount403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getBankAccount404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getBankAccount409ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getBankAccount429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getBankAccount500ApplicationJsonAny?: any;
}
