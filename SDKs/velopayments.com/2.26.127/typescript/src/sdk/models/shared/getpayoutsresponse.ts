import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayoutSummaryAudit } from "./payoutsummaryaudit";



// GetPayoutsResponse
/** 
 * List Payouts Response
**/
export class GetPayoutsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: PayoutSummaryAudit })
  content?: PayoutSummaryAudit[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
