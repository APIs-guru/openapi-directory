import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSecurityLoginRequestBodyProviderEnum {
    Db = "db",
    Ldap = "ldap"
}
export declare class PostSecurityLoginRequestBody extends SpeakeasyBase {
    password?: string;
    provider?: PostSecurityLoginRequestBodyProviderEnum;
    refresh?: boolean;
    username?: string;
}
export declare class PostSecurityLogin200ApplicationJson extends SpeakeasyBase {
    accessToken?: string;
    refreshToken?: string;
}
export declare class PostSecurityLogin400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostSecurityLogin401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostSecurityLogin500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostSecurityLoginRequest extends SpeakeasyBase {
    request: PostSecurityLoginRequestBody;
}
export declare class PostSecurityLoginResponse extends SpeakeasyBase {
    contentType: string;
    postSecurityLogin200ApplicationJsonObject?: PostSecurityLogin200ApplicationJson;
    postSecurityLogin400ApplicationJsonObject?: PostSecurityLogin400ApplicationJson;
    postSecurityLogin401ApplicationJsonObject?: PostSecurityLogin401ApplicationJson;
    postSecurityLogin500ApplicationJsonObject?: PostSecurityLogin500ApplicationJson;
    statusCode: number;
}
