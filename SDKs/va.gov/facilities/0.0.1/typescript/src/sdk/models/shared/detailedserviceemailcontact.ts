import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DetailedServiceEmailContact
/** 
 * Email contact information.
**/
export class DetailedServiceEmailContact extends SpeakeasyBase {
  @Metadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @Metadata({ data: "json, name=email_label" })
  emailLabel?: string;
}
