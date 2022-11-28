import { SpeakeasyBase } from "../../../internal/utils";
export declare class OauthV1Token extends SpeakeasyBase {
    accessToken?: string;
    accessTokenExpiresAt?: Date;
    idToken?: string;
    refreshToken?: string;
    refreshTokenExpiresAt?: Date;
}
