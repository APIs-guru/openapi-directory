import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthGetRequestOptions
/** 
 * An optional object to filter `/auth/get` results.
**/
export class AuthGetRequestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_ids" })
  accountIds?: string[];
}
