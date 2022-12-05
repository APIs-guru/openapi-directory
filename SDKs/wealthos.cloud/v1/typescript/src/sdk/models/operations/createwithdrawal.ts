import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateWithdrawalHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class CreateWithdrawalSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class CreateWithdrawalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateWithdrawalHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: CreateWithdrawalSecurity;
}


export class CreateWithdrawalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rootTypeForWithdrawalCreationResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createWithdrawal400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createWithdrawal401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createWithdrawal403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createWithdrawal404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createWithdrawal409ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createWithdrawal429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createWithdrawal500ApplicationJsonAny?: any;
}
