import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEQUERY_SERVERS: string[];
export declare class CreateQueryPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class CreateQueryCreateQueryRequest extends SpeakeasyBase {
    language: string;
    modelBuild?: string;
    query: string;
    tasks?: string;
}
export declare class CreateQuerySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateQueryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateQueryPathParams;
    request?: CreateQueryCreateQueryRequest;
    security: CreateQuerySecurity;
}
export declare class CreateQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantQuery?: shared.AutopilotV1AssistantQuery;
}
