import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object specifying information about the end user who will be linking their account.
**/
export declare class LinkTokenCreateRequestUser extends SpeakeasyBase {
    clientUserId: string;
    dateOfBirth?: Date;
    emailAddress?: string;
    emailAddressVerifiedTime?: Date;
    legalName?: string;
    phoneNumber?: string;
    phoneNumberVerifiedTime?: Date;
    ssn?: string;
}
