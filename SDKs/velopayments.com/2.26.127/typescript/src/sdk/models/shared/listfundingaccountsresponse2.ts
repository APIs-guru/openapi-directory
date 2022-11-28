import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FundingAccountResponse2 } from "./fundingaccountresponse2";



// ListFundingAccountsResponse2
/** 
 * List Funding Accounts Response Object
**/
export class ListFundingAccountsResponse2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: FundingAccountResponse2 })
  content?: FundingAccountResponse2[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
