import { SpeakeasyBase } from "../../../internal/utils";
import { FundingAudit } from "./fundingaudit";
/**
 * List Users Response Object
**/
export declare class GetFundingsResponse extends SpeakeasyBase {
    content?: FundingAudit[];
    links?: any[];
    page?: any;
}
