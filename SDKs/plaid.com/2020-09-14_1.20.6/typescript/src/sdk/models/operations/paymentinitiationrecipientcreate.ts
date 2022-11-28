import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PaymentInitiationRecipientCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PaymentInitiationRecipientCreateRequest;
}


export class PaymentInitiationRecipientCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentInitiationRecipientCreateResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
