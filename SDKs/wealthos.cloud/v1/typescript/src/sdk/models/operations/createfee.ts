import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFeeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class CreateFeeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class CreateFeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateFeeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: CreateFeeSecurity;
}


export class CreateFeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rootTypeForFeeCreationResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createFee400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createFee401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createFee403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createFee404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createFee409ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createFee429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createFee500ApplicationJsonAny?: any;
}
