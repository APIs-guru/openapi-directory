import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PaymentInitiationRecipientCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PaymentInitiationRecipientCreateRequest;
}


export class PaymentInitiationRecipientCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentInitiationRecipientCreateResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
