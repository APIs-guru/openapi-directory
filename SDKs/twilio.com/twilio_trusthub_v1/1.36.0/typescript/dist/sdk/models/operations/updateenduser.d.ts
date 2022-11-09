import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEENDUSER_SERVERS: string[];
export declare class UpdateEndUserPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateEndUserUpdateEndUserRequest extends SpeakeasyBase {
    attributes?: any;
    friendlyName?: string;
}
export declare class UpdateEndUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateEndUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateEndUserPathParams;
    request?: UpdateEndUserUpdateEndUserRequest;
    security: UpdateEndUserSecurity;
}
export declare class UpdateEndUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1EndUser?: shared.TrusthubV1EndUser;
}
