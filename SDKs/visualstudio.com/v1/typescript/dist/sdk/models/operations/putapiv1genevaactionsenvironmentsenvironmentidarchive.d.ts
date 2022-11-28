import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutApiV1GenevaActionsEnvironmentsEnvironmentIdArchivePathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class PutApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveRequest extends SpeakeasyBase {
    pathParams: PutApiV1GenevaActionsEnvironmentsEnvironmentIdArchivePathParams;
}
export declare class PutApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cloudEnvironmentResult?: shared.CloudEnvironmentResult;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
