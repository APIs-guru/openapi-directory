import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerPreferences
/** 
 * Represents communication preferences for the customer profile.
**/
export class CustomerPreferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=email_unsubscribed" })
  emailUnsubscribed?: boolean;
}
