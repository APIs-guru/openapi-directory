import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteApiV1EnvironmentsEnvironmentIdPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class DeleteApiV1EnvironmentsEnvironmentIdRequest extends SpeakeasyBase {
    pathParams: DeleteApiV1EnvironmentsEnvironmentIdPathParams;
}
export declare class DeleteApiV1EnvironmentsEnvironmentIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
