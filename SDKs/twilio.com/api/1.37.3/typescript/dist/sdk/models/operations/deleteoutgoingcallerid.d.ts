import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteOutgoingCallerIdServerList: readonly ["https://api.twilio.com"];
export declare class DeleteOutgoingCallerIdPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class DeleteOutgoingCallerIdSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteOutgoingCallerIdRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteOutgoingCallerIdPathParams;
    security: DeleteOutgoingCallerIdSecurity;
}
export declare class DeleteOutgoingCallerIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
