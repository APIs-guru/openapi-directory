import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentDeltaV1 } from "./paymentdeltav1";



// PaymentDeltaResponseV1
/** 
 * List Payment Changes Response Object
**/
export class PaymentDeltaResponseV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: PaymentDeltaV1 })
  content?: PaymentDeltaV1[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
