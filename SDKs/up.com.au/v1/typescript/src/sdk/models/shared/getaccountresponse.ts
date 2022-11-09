import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountResource } from "./accountresource";


// GetAccountResponse
/** 
 * Successful response to get a single account.
 * 
**/
export class GetAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: AccountResource;
}
