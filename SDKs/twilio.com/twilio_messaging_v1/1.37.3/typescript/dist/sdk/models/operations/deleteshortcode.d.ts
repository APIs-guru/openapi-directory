import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteShortCodeServerList: readonly ["https://messaging.twilio.com"];
export declare class DeleteShortCodePathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteShortCodeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteShortCodeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteShortCodePathParams;
    security: DeleteShortCodeSecurity;
}
export declare class DeleteShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
