import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateQueryServerList: readonly ["https://autopilot.twilio.com"];
export declare class UpdateQueryPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class UpdateQueryUpdateQueryRequest extends SpeakeasyBase {
    sampleSid?: string;
    status?: string;
}
export declare class UpdateQuerySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateQueryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateQueryPathParams;
    request?: UpdateQueryUpdateQueryRequest;
    security: UpdateQuerySecurity;
}
export declare class UpdateQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantQuery?: shared.AutopilotV1AssistantQuery;
}
