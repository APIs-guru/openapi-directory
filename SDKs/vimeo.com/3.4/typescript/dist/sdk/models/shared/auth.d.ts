import { SpeakeasyBase } from "../../../internal/utils";
import { ApiApp } from "./apiapp";
import { User } from "./user";
export declare enum AuthTokenTypeEnum {
    Bearer = "bearer"
}
export declare class Auth extends SpeakeasyBase {
    accessToken: string;
    app: ApiApp;
    expiresOn?: string;
    refreshToken?: string;
    scope: string;
    tokenType: AuthTokenTypeEnum;
    user?: User;
}
