import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiV1GenevaActionsConfigurationTargetPathParams extends SpeakeasyBase {
    target: string;
}
export declare class PostApiV1GenevaActionsConfigurationTargetRequests extends SpeakeasyBase {
    updateSystemConfigurationBody?: shared.UpdateSystemConfigurationBody;
    updateSystemConfigurationBody1?: shared.UpdateSystemConfigurationBody;
    updateSystemConfigurationBody2?: shared.UpdateSystemConfigurationBody;
    updateSystemConfigurationBody3?: shared.UpdateSystemConfigurationBody;
}
export declare class PostApiV1GenevaActionsConfigurationTargetRequest extends SpeakeasyBase {
    pathParams: PostApiV1GenevaActionsConfigurationTargetPathParams;
    request: PostApiV1GenevaActionsConfigurationTargetRequests;
}
export declare class PostApiV1GenevaActionsConfigurationTargetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
    systemConfigurationResponse?: shared.SystemConfigurationResponse;
}
