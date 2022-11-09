import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaymentV3 } from "./paymentv3";


// PagedPaymentsResponseV3
/** 
 * List Payees Response Object
**/
export class PagedPaymentsResponseV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.PaymentV3 })
  content?: PaymentV3[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;
}
