import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthGetRequestOptions
/** 
 * An optional object to filter `/auth/get` results.
**/
export class AuthGetRequestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_ids" })
  accountIds?: string[];
}
