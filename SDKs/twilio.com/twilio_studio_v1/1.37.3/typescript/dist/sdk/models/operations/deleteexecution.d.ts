import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteExecutionServerList: readonly ["https://studio.twilio.com"];
export declare class DeleteExecutionPathParams extends SpeakeasyBase {
    flowSid: string;
    sid: string;
}
export declare class DeleteExecutionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteExecutionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteExecutionPathParams;
    security: DeleteExecutionSecurity;
}
export declare class DeleteExecutionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
