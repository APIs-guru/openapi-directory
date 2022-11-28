import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteQueryServerList: readonly ["https://autopilot.twilio.com"];
export declare class DeleteQueryPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class DeleteQuerySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteQueryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteQueryPathParams;
    security: DeleteQuerySecurity;
}
export declare class DeleteQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
