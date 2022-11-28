import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePaymentTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PaymentInitiationPaymentTokenCreateRequest;
}


export class CreatePaymentTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentInitiationPaymentTokenCreateResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
