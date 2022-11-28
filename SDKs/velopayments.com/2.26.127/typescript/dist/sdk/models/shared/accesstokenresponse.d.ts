import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
export declare class AccessTokenResponse extends SpeakeasyBase {
    accessToken?: string;
    entityIds?: string[];
    expiresIn?: number;
    refreshToken?: string;
    scope?: string;
    tokenType?: string;
    userInfo?: UserInfo;
}
