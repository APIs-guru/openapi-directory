import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FundingAccountResponse2 } from "./fundingaccountresponse2";


// ListFundingAccountsResponse2
/** 
 * List Funding Accounts Response Object
**/
export class ListFundingAccountsResponse2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.FundingAccountResponse2 })
  content?: FundingAccountResponse2[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;
}
