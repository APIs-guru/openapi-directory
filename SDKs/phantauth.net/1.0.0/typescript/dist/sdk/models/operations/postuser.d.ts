import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The user's preferred postal address.
**/
export declare class PostUserRequestBodyAddress extends SpeakeasyBase {
    country?: string;
    formatted?: string;
    locality?: string;
    postalCode?: string;
    region?: string;
    streetAddress?: string;
}
export declare class PostUserRequestBody extends SpeakeasyBase {
    atId?: string;
    address?: PostUserRequestBodyAddress;
    birthdate?: string;
    email?: string;
    emailVerified?: boolean;
    familyName?: string;
    gender?: string;
    givenName?: string;
    locale?: string;
    me?: string;
    middleName?: string;
    name?: string;
    nickname?: string;
    password?: string;
    phoneNumber?: string;
    phoneNumberVerified?: boolean;
    picture?: string;
    preferredUsername?: string;
    profile?: string;
    sub: string;
    uid?: string;
    updatedAt?: number;
    webmail?: string;
    website?: string;
    zoneinfo?: string;
}
export declare class PostUserRequest extends SpeakeasyBase {
    request?: PostUserRequestBody;
}
export declare class PostUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
