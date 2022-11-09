import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Contact } from "./contact";


// SupplierParty
/** 
 * A party that can send invoices
**/
export class SupplierParty extends SpeakeasyBase {
  @Metadata({ data: "json, name=contact" })
  contact?: Contact;
}
