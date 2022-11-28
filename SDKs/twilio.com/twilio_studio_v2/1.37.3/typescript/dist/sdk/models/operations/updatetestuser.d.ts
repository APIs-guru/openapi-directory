import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateTestUserServerList: readonly ["https://studio.twilio.com"];
export declare class UpdateTestUserPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateTestUserUpdateTestUserRequest extends SpeakeasyBase {
    testUsers: string[];
}
export declare class UpdateTestUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateTestUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateTestUserPathParams;
    request?: UpdateTestUserUpdateTestUserRequest;
    security: UpdateTestUserSecurity;
}
export declare class UpdateTestUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV2FlowTestUser?: shared.StudioV2FlowTestUser;
}
