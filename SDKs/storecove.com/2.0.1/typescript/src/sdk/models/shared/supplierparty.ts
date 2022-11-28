import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";



// SupplierParty
/** 
 * A party that can send invoices
**/
export class SupplierParty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: Contact;
}
