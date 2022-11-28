import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentResponseV4 } from "./paymentresponsev4";



// ListPaymentsResponseV4
/** 
 * List Payments Response Object
**/
export class ListPaymentsResponseV4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: PaymentResponseV4 })
  content?: PaymentResponseV4[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
