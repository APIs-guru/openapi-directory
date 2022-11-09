import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PaymentInitiationPaymentGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PaymentInitiationPaymentGetRequest;
}


export class PaymentInitiationPaymentGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentInitiationPaymentGetResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
