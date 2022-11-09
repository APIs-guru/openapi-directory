import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHDEFAULTS_SERVERS: string[];
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
