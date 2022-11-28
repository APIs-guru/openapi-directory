import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountResource } from "./accountresource";



// GetAccountResponse
/** 
 * Successful response to get a single account.
 * 
**/
export class GetAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: AccountResource;
}
