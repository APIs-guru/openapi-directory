import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHQUERY_SERVERS: string[];
export declare class FetchQueryPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class FetchQuerySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchQueryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchQueryPathParams;
    security: FetchQuerySecurity;
}
export declare class FetchQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantQuery?: shared.AutopilotV1AssistantQuery;
}
