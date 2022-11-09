import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InventoryAdjustmentGroup } from "./inventoryadjustmentgroup";
import { SourceApplication } from "./sourceapplication";
import { Money } from "./money";


// InventoryAdjustment
/** 
 * Represents a change in state or quantity of product inventory at a
 * particular time and location.
**/
export class InventoryAdjustment extends SpeakeasyBase {
  @Metadata({ data: "json, name=adjustment_group" })
  adjustmentGroup?: InventoryAdjustmentGroup;

  @Metadata({ data: "json, name=catalog_object_id" })
  catalogObjectId?: string;

  @Metadata({ data: "json, name=catalog_object_type" })
  catalogObjectType?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @Metadata({ data: "json, name=from_state" })
  fromState?: string;

  @Metadata({ data: "json, name=goods_receipt_id" })
  goodsReceiptId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=occurred_at" })
  occurredAt?: string;

  @Metadata({ data: "json, name=purchase_order_id" })
  purchaseOrderId?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: string;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;

  @Metadata({ data: "json, name=refund_id" })
  refundId?: string;

  @Metadata({ data: "json, name=source" })
  source?: SourceApplication;

  @Metadata({ data: "json, name=to_state" })
  toState?: string;

  @Metadata({ data: "json, name=total_price_money" })
  totalPriceMoney?: Money;

  @Metadata({ data: "json, name=transaction_id" })
  transactionId?: string;
}
