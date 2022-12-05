import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateBankAccountHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class CreateBankAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class CreateBankAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateBankAccountHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: CreateBankAccountSecurity;
}


export class CreateBankAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createBankAccount201ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createBankAccount400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createBankAccount401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createBankAccount403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createBankAccount404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createBankAccount409ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createBankAccount429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createBankAccount500ApplicationJsonAny?: any;
}
