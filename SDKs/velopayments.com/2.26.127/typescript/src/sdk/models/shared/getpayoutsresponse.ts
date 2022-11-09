import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PayoutSummaryAudit } from "./payoutsummaryaudit";


// GetPayoutsResponse
/** 
 * List Payouts Response
**/
export class GetPayoutsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.PayoutSummaryAudit })
  content?: PayoutSummaryAudit[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;
}
