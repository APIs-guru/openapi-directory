import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchApiV1EnvironmentsEnvironmentIdPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class PatchApiV1EnvironmentsEnvironmentIdRequests extends SpeakeasyBase {
    updateCloudEnvironmentBody?: shared.UpdateCloudEnvironmentBody;
    updateCloudEnvironmentBody1?: shared.UpdateCloudEnvironmentBody;
    updateCloudEnvironmentBody2?: shared.UpdateCloudEnvironmentBody;
    updateCloudEnvironmentBody3?: shared.UpdateCloudEnvironmentBody;
}
export declare class PatchApiV1EnvironmentsEnvironmentIdRequest extends SpeakeasyBase {
    pathParams: PatchApiV1EnvironmentsEnvironmentIdPathParams;
    request?: PatchApiV1EnvironmentsEnvironmentIdRequests;
}
export declare class PatchApiV1EnvironmentsEnvironmentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cloudEnvironmentResult?: shared.CloudEnvironmentResult;
    contentType: string;
    messageCodes?: number[];
    problemDetails?: Map<string, any>;
    statusCode: number;
}
