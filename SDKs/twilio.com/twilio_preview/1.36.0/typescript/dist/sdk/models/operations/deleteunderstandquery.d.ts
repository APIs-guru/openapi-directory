import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEUNDERSTANDQUERY_SERVERS: string[];
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
