import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEUNDERSTANDSAMPLE_SERVERS: string[];
export declare class DeleteUnderstandSamplePathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
    taskSid: string;
}
export declare class DeleteUnderstandSampleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUnderstandSampleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUnderstandSamplePathParams;
    security: DeleteUnderstandSampleSecurity;
}
export declare class DeleteUnderstandSampleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
