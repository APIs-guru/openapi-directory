import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEFLEXFLOW_SERVERS: string[];
export declare class DeleteFlexFlowPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteFlexFlowSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteFlexFlowRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteFlexFlowPathParams;
    security: DeleteFlexFlowSecurity;
}
export declare class DeleteFlexFlowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
