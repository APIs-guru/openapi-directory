import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteApplicationServerList: readonly ["https://api.twilio.com"];
export declare class DeleteApplicationPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class DeleteApplicationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteApplicationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteApplicationPathParams;
    security: DeleteApplicationSecurity;
}
export declare class DeleteApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
