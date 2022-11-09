import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PaymentInitiationPaymentListRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PaymentInitiationPaymentListRequest;
}


export class PaymentInitiationPaymentListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentInitiationPaymentListResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
