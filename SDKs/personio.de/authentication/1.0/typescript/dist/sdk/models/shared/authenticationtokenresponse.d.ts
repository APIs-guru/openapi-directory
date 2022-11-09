import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AuthenticationTokenResponseData extends SpeakeasyBase {
    token: string;
}
export declare class AuthenticationTokenResponse extends SpeakeasyBase {
    data: AuthenticationTokenResponseData;
    success: boolean;
}
