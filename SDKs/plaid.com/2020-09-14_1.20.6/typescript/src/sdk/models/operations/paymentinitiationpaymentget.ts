import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PaymentInitiationPaymentGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PaymentInitiationPaymentGetRequest;
}


export class PaymentInitiationPaymentGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentInitiationPaymentGetResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
