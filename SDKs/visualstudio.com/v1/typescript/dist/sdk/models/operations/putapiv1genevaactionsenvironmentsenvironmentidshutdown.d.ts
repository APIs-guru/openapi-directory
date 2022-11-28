import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class PutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownRequest extends SpeakeasyBase {
    pathParams: PutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownPathParams;
}
export declare class PutApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cloudEnvironmentResult?: shared.CloudEnvironmentResult;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
