import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSinglePaymentIntentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class CreateSinglePaymentIntentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class CreateSinglePaymentIntentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateSinglePaymentIntentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: CreateSinglePaymentIntentSecurity;
}


export class CreateSinglePaymentIntentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createSinglePaymentIntent201ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createSinglePaymentIntent400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createSinglePaymentIntent401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createSinglePaymentIntent403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createSinglePaymentIntent409ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createSinglePaymentIntent429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createSinglePaymentIntent500ApplicationJsonAny?: any;
}
