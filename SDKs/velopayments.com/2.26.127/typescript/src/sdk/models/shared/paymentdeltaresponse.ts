import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaymentDelta } from "./paymentdelta";


// PaymentDeltaResponse
/** 
 * List Payment Changes Response Object
**/
export class PaymentDeltaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.PaymentDelta })
  content?: PaymentDelta[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;
}
