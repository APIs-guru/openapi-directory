import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LinkTokenCreateRequestUser
/** 
 * An object specifying information about the end user who will be linking their account.
**/
export class LinkTokenCreateRequestUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_user_id" })
  clientUserId: string;

  @SpeakeasyMetadata({ data: "json, name=date_of_birth" })
  dateOfBirth?: Date;

  @SpeakeasyMetadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=email_address_verified_time" })
  emailAddressVerifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=legal_name" })
  legalName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number_verified_time" })
  phoneNumberVerifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ssn" })
  ssn?: string;
}
