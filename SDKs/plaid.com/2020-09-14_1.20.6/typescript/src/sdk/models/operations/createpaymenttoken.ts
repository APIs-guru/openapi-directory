import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePaymentTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PaymentInitiationPaymentTokenCreateRequest;
}


export class CreatePaymentTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentInitiationPaymentTokenCreateResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
