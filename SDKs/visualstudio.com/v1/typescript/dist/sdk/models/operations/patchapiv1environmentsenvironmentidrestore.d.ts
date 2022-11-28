import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatchApiV1EnvironmentsEnvironmentIdRestorePathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class PatchApiV1EnvironmentsEnvironmentIdRestoreRequest extends SpeakeasyBase {
    pathParams: PatchApiV1EnvironmentsEnvironmentIdRestorePathParams;
}
export declare class PatchApiV1EnvironmentsEnvironmentIdRestoreResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
