import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApiV1EnvironmentsEnvironmentIdStatePathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class GetApiV1EnvironmentsEnvironmentIdStateRequest extends SpeakeasyBase {
    pathParams: GetApiV1EnvironmentsEnvironmentIdStatePathParams;
}
export declare class GetApiV1EnvironmentsEnvironmentIdStateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
