import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ItemImportRequestUserAuth
/** 
 * Object of user ID and auth token pair, permitting Plaid to aggregate a user’s accounts
**/
export class ItemImportRequestUserAuth extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth_token" })
  authToken: string;

  @Metadata({ data: "json, name=user_id" })
  userId: string;
}
