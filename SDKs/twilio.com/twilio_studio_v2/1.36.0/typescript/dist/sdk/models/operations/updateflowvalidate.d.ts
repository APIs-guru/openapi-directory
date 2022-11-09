import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEFLOWVALIDATE_SERVERS: string[];
export declare class UpdateFlowValidateUpdateFlowValidateRequest extends SpeakeasyBase {
    commitMessage?: string;
    definition: any;
    friendlyName: string;
    status: shared.FlowValidateEnumStatusEnum;
}
export declare class UpdateFlowValidateSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateFlowValidateRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: UpdateFlowValidateUpdateFlowValidateRequest;
    security: UpdateFlowValidateSecurity;
}
export declare class UpdateFlowValidateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV2FlowValidate?: shared.StudioV2FlowValidate;
}
