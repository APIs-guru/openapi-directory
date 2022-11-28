import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUnderstandQueryServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandQueryPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class FetchUnderstandQuerySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUnderstandQueryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUnderstandQueryPathParams;
    security: FetchUnderstandQuerySecurity;
}
export declare class FetchUnderstandQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantQuery?: shared.PreviewUnderstandAssistantQuery;
}
