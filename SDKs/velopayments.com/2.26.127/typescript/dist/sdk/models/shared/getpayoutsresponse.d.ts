import { SpeakeasyBase } from "../../../internal/utils";
import { PayoutSummaryAudit } from "./payoutsummaryaudit";
/**
 * List Payouts Response
**/
export declare class GetPayoutsResponse extends SpeakeasyBase {
    content?: PayoutSummaryAudit[];
    links?: any[];
    page?: any;
}
