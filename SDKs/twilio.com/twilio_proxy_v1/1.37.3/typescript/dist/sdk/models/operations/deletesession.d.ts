import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSessionServerList: readonly ["https://proxy.twilio.com"];
export declare class DeleteSessionPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteSessionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSessionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSessionPathParams;
    security: DeleteSessionSecurity;
}
export declare class DeleteSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
