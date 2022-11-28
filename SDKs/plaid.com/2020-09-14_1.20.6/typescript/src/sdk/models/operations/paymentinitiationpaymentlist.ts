import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PaymentInitiationPaymentListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PaymentInitiationPaymentListRequest;
}


export class PaymentInitiationPaymentListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentInitiationPaymentListResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
