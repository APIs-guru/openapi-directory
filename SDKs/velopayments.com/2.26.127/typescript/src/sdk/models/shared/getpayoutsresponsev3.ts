import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayoutSummaryAuditV3 } from "./payoutsummaryauditv3";



// GetPayoutsResponseV3
/** 
 * List Payouts Response
**/
export class GetPayoutsResponseV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: PayoutSummaryAuditV3 })
  content?: PayoutSummaryAuditV3[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
