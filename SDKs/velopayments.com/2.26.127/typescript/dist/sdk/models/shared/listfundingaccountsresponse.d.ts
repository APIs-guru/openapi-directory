import { SpeakeasyBase } from "../../../internal/utils";
import { FundingAccountResponse } from "./fundingaccountresponse";
/**
 * List Source Accounts Response Object
**/
export declare class ListFundingAccountsResponse extends SpeakeasyBase {
    content?: FundingAccountResponse[];
    links?: any[];
    page?: any;
}
