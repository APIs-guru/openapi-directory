import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteAlphaSenderServerList: readonly ["https://messaging.twilio.com"];
export declare class DeleteAlphaSenderPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteAlphaSenderSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteAlphaSenderRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteAlphaSenderPathParams;
    security: DeleteAlphaSenderSecurity;
}
export declare class DeleteAlphaSenderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
