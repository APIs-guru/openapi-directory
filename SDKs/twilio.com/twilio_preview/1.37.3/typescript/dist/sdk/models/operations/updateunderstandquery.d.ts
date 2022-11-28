import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateUnderstandQueryServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateUnderstandQueryPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class UpdateUnderstandQueryUpdateUnderstandQueryRequest extends SpeakeasyBase {
    sampleSid?: string;
    status?: string;
}
export declare class UpdateUnderstandQuerySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateUnderstandQueryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateUnderstandQueryPathParams;
    request?: UpdateUnderstandQueryUpdateUnderstandQueryRequest;
    security: UpdateUnderstandQuerySecurity;
}
export declare class UpdateUnderstandQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantQuery?: shared.PreviewUnderstandAssistantQuery;
}
