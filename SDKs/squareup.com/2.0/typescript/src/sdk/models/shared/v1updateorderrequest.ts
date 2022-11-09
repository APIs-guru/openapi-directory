import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// V1UpdateOrderRequest
/** 
 * V1UpdateOrderRequest
**/
export class V1UpdateOrderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: string;

  @Metadata({ data: "json, name=canceled_note" })
  canceledNote?: string;

  @Metadata({ data: "json, name=completed_note" })
  completedNote?: string;

  @Metadata({ data: "json, name=refunded_note" })
  refundedNote?: string;

  @Metadata({ data: "json, name=shipped_tracking_number" })
  shippedTrackingNumber?: string;
}
