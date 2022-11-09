import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LinkTokenCreateRequestUser
/** 
 * An object specifying information about the end user who will be linking their account.
**/
export class LinkTokenCreateRequestUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_user_id" })
  clientUserId: string;

  @Metadata({ data: "json, name=date_of_birth" })
  dateOfBirth?: Date;

  @Metadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @Metadata({ data: "json, name=email_address_verified_time" })
  emailAddressVerifiedTime?: Date;

  @Metadata({ data: "json, name=legal_name" })
  legalName?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=phone_number_verified_time" })
  phoneNumberVerifiedTime?: Date;

  @Metadata({ data: "json, name=ssn" })
  ssn?: string;
}
