import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PaymentInitiationRecipientListRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PaymentInitiationRecipientListRequest;
}


export class PaymentInitiationRecipientListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentInitiationRecipientListResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
