import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Account } from "./account";


// AccountEmbeddedObject
/** 
 * Account object
**/
export class AccountEmbeddedObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Account;
}
