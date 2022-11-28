import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ItemImportRequestUserAuth
/** 
 * Object of user ID and auth token pair, permitting Plaid to aggregate a user’s accounts
**/
export class ItemImportRequestUserAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_token" })
  authToken: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;
}
