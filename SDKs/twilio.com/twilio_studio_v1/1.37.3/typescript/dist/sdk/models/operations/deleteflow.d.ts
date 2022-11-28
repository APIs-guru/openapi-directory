import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteFlowServerList: readonly ["https://studio.twilio.com"];
export declare class DeleteFlowPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteFlowSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteFlowRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteFlowPathParams;
    security: DeleteFlowSecurity;
}
export declare class DeleteFlowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
