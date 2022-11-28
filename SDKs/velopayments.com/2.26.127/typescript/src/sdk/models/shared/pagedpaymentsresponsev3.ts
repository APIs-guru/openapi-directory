import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentV3 } from "./paymentv3";



// PagedPaymentsResponseV3
/** 
 * List Payees Response Object
**/
export class PagedPaymentsResponseV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: PaymentV3 })
  content?: PaymentV3[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
