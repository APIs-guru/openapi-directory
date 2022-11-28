import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteUnderstandSampleServerList: readonly ["https://preview.twilio.com"];
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
