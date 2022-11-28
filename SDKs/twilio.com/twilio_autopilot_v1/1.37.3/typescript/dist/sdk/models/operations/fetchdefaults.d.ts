import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchDefaultsServerList: readonly ["https://autopilot.twilio.com"];
export declare class FetchDefaultsPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class FetchDefaultsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchDefaultsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchDefaultsPathParams;
    security: FetchDefaultsSecurity;
}
export declare class FetchDefaultsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantDefaults?: shared.AutopilotV1AssistantDefaults;
}
