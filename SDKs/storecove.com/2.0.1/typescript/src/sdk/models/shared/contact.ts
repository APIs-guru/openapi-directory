import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Contact
/** 
 * Contact details for the invoice
**/
export class Contact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;
}
