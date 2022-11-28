import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1GenevaActionsConfigurationTargetKeyPathParams extends SpeakeasyBase {
    key: string;
    target: string;
}
export declare class GetApiV1GenevaActionsConfigurationTargetKeyRequest extends SpeakeasyBase {
    pathParams: GetApiV1GenevaActionsConfigurationTargetKeyPathParams;
}
export declare class GetApiV1GenevaActionsConfigurationTargetKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
    systemConfigurationResponse?: shared.SystemConfigurationResponse;
}
