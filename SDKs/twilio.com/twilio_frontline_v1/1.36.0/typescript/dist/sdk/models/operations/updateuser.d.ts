import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEUSER_SERVERS: string[];
export declare class UpdateUserPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateUserUpdateUserRequest extends SpeakeasyBase {
    avatar?: string;
    friendlyName?: string;
    isAvailable?: boolean;
    state?: shared.UserEnumStateTypeEnum;
}
export declare class UpdateUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateUserPathParams;
    request?: UpdateUserUpdateUserRequest;
    security: UpdateUserSecurity;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    frontlineV1User?: shared.FrontlineV1User;
}
