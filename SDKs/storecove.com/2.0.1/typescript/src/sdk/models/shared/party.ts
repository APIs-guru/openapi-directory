import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";
import { Contact } from "./contact";


// Party
/** 
 * A party that can receive or send invoices
**/
export class Party extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address: Address;

  @Metadata({ data: "json, name=companyName" })
  companyName: string;

  @Metadata({ data: "json, name=contact" })
  contact?: Contact;
}
