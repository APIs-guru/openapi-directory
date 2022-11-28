import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DetailedServiceEmailContact
/** 
 * Email contact information.
**/
export class DetailedServiceEmailContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=email_label" })
  emailLabel?: string;
}
