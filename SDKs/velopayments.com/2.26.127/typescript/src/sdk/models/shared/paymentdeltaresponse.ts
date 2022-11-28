import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentDelta } from "./paymentdelta";



// PaymentDeltaResponse
/** 
 * List Payment Changes Response Object
**/
export class PaymentDeltaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: PaymentDelta })
  content?: PaymentDelta[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
