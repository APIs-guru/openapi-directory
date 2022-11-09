import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Refund } from "./refund";
import { Address } from "./address";
import { Tender } from "./tender";


// Transaction
/** 
 * Represents a transaction processed with Square, either with the
 * Connect API or with Square Point of Sale.
 * 
 * The `tenders` field of this object lists all methods of payment used to pay in
 * the transaction.
**/
export class Transaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=order_id" })
  orderId?: string;

  @Metadata({ data: "json, name=product" })
  product?: string;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;

  @Metadata({ data: "json, name=refunds", elemType: shared.Refund })
  refunds?: Refund[];

  @Metadata({ data: "json, name=shipping_address" })
  shippingAddress?: Address;

  @Metadata({ data: "json, name=tenders", elemType: shared.Tender })
  tenders?: Tender[];
}
