import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateBankAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bank_account_id" })
  bankAccountId: string;
}


export class UpdateBankAccountHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class UpdateBankAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class UpdateBankAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateBankAccountPathParams;

  @SpeakeasyMetadata()
  headers: UpdateBankAccountHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: UpdateBankAccountSecurity;
}


export class UpdateBankAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateBankAccount201ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateBankAccount400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateBankAccount401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateBankAccount403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateBankAccount404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateBankAccount409ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateBankAccount429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateBankAccount500ApplicationJsonAny?: any;
}
