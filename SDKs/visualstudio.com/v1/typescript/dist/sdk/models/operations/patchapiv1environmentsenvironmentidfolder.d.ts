import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchApiV1EnvironmentsEnvironmentIdFolderPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class PatchApiV1EnvironmentsEnvironmentIdFolderRequests extends SpeakeasyBase {
    cloudEnvironmentFolderBody?: shared.CloudEnvironmentFolderBody;
    cloudEnvironmentFolderBody1?: shared.CloudEnvironmentFolderBody;
    cloudEnvironmentFolderBody2?: shared.CloudEnvironmentFolderBody;
    cloudEnvironmentFolderBody3?: shared.CloudEnvironmentFolderBody;
}
export declare class PatchApiV1EnvironmentsEnvironmentIdFolderRequest extends SpeakeasyBase {
    pathParams: PatchApiV1EnvironmentsEnvironmentIdFolderPathParams;
    request?: PatchApiV1EnvironmentsEnvironmentIdFolderRequests;
}
export declare class PatchApiV1EnvironmentsEnvironmentIdFolderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cloudEnvironmentResult?: shared.CloudEnvironmentResult;
    contentType: string;
    messageCodes?: number[];
    problemDetails?: Map<string, any>;
    statusCode: number;
}
