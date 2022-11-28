import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class GetApiV1GenevaActionsEnvironmentsEnvironmentIdRequest extends SpeakeasyBase {
    pathParams: GetApiV1GenevaActionsEnvironmentsEnvironmentIdPathParams;
}
export declare class GetApiV1GenevaActionsEnvironmentsEnvironmentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cloudEnvironmentResult?: shared.CloudEnvironmentResult;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
