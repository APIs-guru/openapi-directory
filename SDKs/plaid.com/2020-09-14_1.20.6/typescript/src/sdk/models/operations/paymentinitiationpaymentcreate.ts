import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PaymentInitiationPaymentCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PaymentInitiationPaymentCreateRequest;
}


export class PaymentInitiationPaymentCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentInitiationPaymentCreateResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
