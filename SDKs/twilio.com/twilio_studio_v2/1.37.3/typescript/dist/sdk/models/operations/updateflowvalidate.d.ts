import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateFlowValidateServerList: readonly ["https://studio.twilio.com"];
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
