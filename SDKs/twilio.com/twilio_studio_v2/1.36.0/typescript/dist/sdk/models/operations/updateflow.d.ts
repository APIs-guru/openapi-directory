import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEFLOW_SERVERS: string[];
export declare class UpdateFlowPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateFlowUpdateFlowRequest extends SpeakeasyBase {
    commitMessage?: string;
    definition?: any;
    friendlyName?: string;
    status: shared.FlowEnumStatusEnum;
}
export declare class UpdateFlowSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateFlowRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateFlowPathParams;
    request?: UpdateFlowUpdateFlowRequest;
    security: UpdateFlowSecurity;
}
export declare class UpdateFlowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV2Flow?: shared.StudioV2Flow;
}
