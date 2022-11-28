import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FundingAccountResponse } from "./fundingaccountresponse";



// ListFundingAccountsResponse
/** 
 * List Source Accounts Response Object
**/
export class ListFundingAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: FundingAccountResponse })
  content?: FundingAccountResponse[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
