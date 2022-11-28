import { SpeakeasyBase } from "../../../internal/utils";
import { PayoutSummaryAuditV3 } from "./payoutsummaryauditv3";
/**
 * List Payouts Response
**/
export declare class GetPayoutsResponseV3 extends SpeakeasyBase {
    content?: PayoutSummaryAuditV3[];
    links?: any[];
    page?: any;
}
