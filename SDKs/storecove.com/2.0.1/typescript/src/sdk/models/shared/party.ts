import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Contact } from "./contact";



// Party
/** 
 * A party that can receive or send invoices
**/
export class Party extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: Address;

  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName: string;

  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: Contact;
}
