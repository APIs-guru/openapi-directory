import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FundingAccountResponse } from "./fundingaccountresponse";


// ListFundingAccountsResponse
/** 
 * List Source Accounts Response Object
**/
export class ListFundingAccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.FundingAccountResponse })
  content?: FundingAccountResponse[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;
}
