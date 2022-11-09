import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESAMPLE_SERVERS: string[];
export declare class DeleteSamplePathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
    taskSid: string;
}
export declare class DeleteSampleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSampleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSamplePathParams;
    security: DeleteSampleSecurity;
}
export declare class DeleteSampleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
