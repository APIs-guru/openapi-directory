import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAccess } from "./accountaccess";



// Scopes
/** 
 * The scopes object
**/
export class Scopes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: AccountAccess })
  accounts?: AccountAccess[];

  @SpeakeasyMetadata({ data: "json, name=new_accounts" })
  newAccounts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=product_access" })
  productAccess?: Map<string, any>;
}
