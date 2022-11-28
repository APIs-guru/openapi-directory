import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PaymentInitiationRecipientListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PaymentInitiationRecipientListRequest;
}


export class PaymentInitiationRecipientListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentInitiationRecipientListResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
