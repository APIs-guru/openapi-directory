import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchTestUserServerList: readonly ["https://studio.twilio.com"];
export declare class FetchTestUserPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchTestUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTestUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTestUserPathParams;
    security: FetchTestUserSecurity;
}
export declare class FetchTestUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV2FlowTestUser?: shared.StudioV2FlowTestUser;
}
