import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";



// AccountEmbeddedObject
/** 
 * Account object
**/
export class AccountEmbeddedObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Account;
}
