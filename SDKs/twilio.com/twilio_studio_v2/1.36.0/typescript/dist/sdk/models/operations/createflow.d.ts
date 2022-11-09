import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEFLOW_SERVERS: string[];
export declare class CreateFlowCreateFlowRequest extends SpeakeasyBase {
    commitMessage?: string;
    definition: any;
    friendlyName: string;
    status: shared.FlowEnumStatusEnum;
}
export declare class CreateFlowSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateFlowRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateFlowCreateFlowRequest;
    security: CreateFlowSecurity;
}
export declare class CreateFlowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV2Flow?: shared.StudioV2Flow;
}
