import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Contact
/** 
 * Contact details for the invoice
**/
export class Contact extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;
}
