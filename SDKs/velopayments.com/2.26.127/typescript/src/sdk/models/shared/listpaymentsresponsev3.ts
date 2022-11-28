import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentResponseV3 } from "./paymentresponsev3";



// ListPaymentsResponseV3
/** 
 * List Payments Response Object
**/
export class ListPaymentsResponseV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: PaymentResponseV3 })
  content?: PaymentResponseV3[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
