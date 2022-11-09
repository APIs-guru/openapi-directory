import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PaymentInitiationPaymentCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PaymentInitiationPaymentCreateRequest;
}


export class PaymentInitiationPaymentCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentInitiationPaymentCreateResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
