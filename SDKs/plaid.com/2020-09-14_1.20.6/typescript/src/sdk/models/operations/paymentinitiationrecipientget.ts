import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PaymentInitiationRecipientGetRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PaymentInitiationRecipientGetRequest;
}


export class PaymentInitiationRecipientGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentInitiationRecipientGetResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
