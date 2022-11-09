import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PayoutSummaryAuditV3 } from "./payoutsummaryauditv3";


// GetPayoutsResponseV3
/** 
 * List Payouts Response
**/
export class GetPayoutsResponseV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.PayoutSummaryAuditV3 })
  content?: PayoutSummaryAuditV3[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;
}
