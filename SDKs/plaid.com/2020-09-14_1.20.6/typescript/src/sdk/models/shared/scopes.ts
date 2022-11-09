import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountAccess } from "./accountaccess";


// Scopes
/** 
 * The scopes object
**/
export class Scopes extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.AccountAccess })
  accounts?: AccountAccess[];

  @Metadata({ data: "json, name=new_accounts" })
  newAccounts?: boolean;

  @Metadata({ data: "json, name=product_access" })
  productAccess?: Map<string, any>;
}
