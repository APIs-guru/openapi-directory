import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetUserUsernamePathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetUserUsernameRequest extends SpeakeasyBase {
    pathParams: GetUserUsernamePathParams;
}
/**
 * The user's preferred postal address.
**/
export declare class GetUserUsername200ApplicationJsonAddress extends SpeakeasyBase {
    country?: string;
    formatted?: string;
    locality?: string;
    postalCode?: string;
    region?: string;
    streetAddress?: string;
}
export declare class GetUserUsername200ApplicationJson extends SpeakeasyBase {
    atId?: string;
    address?: GetUserUsername200ApplicationJsonAddress;
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
export declare class GetUserUsernameResponse extends SpeakeasyBase {
    contentType: string;
    getUserUsername200ApplicationJsonObject?: GetUserUsername200ApplicationJson;
    statusCode: number;
}
