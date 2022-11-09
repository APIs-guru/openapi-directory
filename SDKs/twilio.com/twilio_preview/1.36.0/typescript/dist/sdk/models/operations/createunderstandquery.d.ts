import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEUNDERSTANDQUERY_SERVERS: string[];
export declare class CreateUnderstandQueryPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class CreateUnderstandQueryCreateUnderstandQueryRequest extends SpeakeasyBase {
    field?: string;
    language: string;
    modelBuild?: string;
    query: string;
    tasks?: string;
}
export declare class CreateUnderstandQuerySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateUnderstandQueryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateUnderstandQueryPathParams;
    request?: CreateUnderstandQueryCreateUnderstandQueryRequest;
    security: CreateUnderstandQuerySecurity;
}
export declare class CreateUnderstandQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantQuery?: shared.PreviewUnderstandAssistantQuery;
}
