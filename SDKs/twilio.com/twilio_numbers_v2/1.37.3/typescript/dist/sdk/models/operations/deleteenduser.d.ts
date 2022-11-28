import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteEndUserServerList: readonly ["https://numbers.twilio.com"];
export declare class DeleteEndUserPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteEndUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteEndUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteEndUserPathParams;
    security: DeleteEndUserSecurity;
}
export declare class DeleteEndUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
