import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaymentDeltaV1 } from "./paymentdeltav1";


// PaymentDeltaResponseV1
/** 
 * List Payment Changes Response Object
**/
export class PaymentDeltaResponseV1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.PaymentDeltaV1 })
  content?: PaymentDeltaV1[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;
}
