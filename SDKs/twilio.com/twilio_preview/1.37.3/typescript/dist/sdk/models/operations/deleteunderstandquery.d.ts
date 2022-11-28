import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteUnderstandQueryServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteUnderstandQueryPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class DeleteUnderstandQuerySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUnderstandQueryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUnderstandQueryPathParams;
    security: DeleteUnderstandQuerySecurity;
}
export declare class DeleteUnderstandQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
