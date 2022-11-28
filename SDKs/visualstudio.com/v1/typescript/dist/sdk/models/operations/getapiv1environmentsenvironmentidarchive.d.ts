import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1EnvironmentsEnvironmentIdArchivePathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class GetApiV1EnvironmentsEnvironmentIdArchiveRequest extends SpeakeasyBase {
    pathParams: GetApiV1EnvironmentsEnvironmentIdArchivePathParams;
}
export declare class GetApiV1EnvironmentsEnvironmentIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    messageCodes?: number;
    problemDetails?: Map<string, any>;
    statusCode: number;
    unfilteredCloudEnvironmentResult?: shared.UnfilteredCloudEnvironmentResult;
}
