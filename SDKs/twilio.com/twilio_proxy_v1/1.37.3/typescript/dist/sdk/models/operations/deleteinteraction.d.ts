import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteInteractionServerList: readonly ["https://proxy.twilio.com"];
export declare class DeleteInteractionPathParams extends SpeakeasyBase {
    serviceSid: string;
    sessionSid: string;
    sid: string;
}
export declare class DeleteInteractionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteInteractionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteInteractionPathParams;
    security: DeleteInteractionSecurity;
}
export declare class DeleteInteractionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
