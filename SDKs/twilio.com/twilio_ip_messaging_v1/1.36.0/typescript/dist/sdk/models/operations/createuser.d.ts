import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEUSER_SERVERS: string[];
export declare class CreateUserPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateUserCreateUserRequest extends SpeakeasyBase {
    attributes?: string;
    friendlyName?: string;
    identity: string;
    roleSid?: string;
}
export declare class CreateUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateUserPathParams;
    request?: CreateUserCreateUserRequest;
    security: CreateUserSecurity;
}
export declare class CreateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV1ServiceUser?: shared.IpMessagingV1ServiceUser;
}
