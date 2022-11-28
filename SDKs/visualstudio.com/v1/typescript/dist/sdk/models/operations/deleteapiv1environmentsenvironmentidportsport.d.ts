import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteApiV1EnvironmentsEnvironmentIdPortsPortPathParams extends SpeakeasyBase {
    environmentId: string;
    port: number;
}
export declare class DeleteApiV1EnvironmentsEnvironmentIdPortsPortRequest extends SpeakeasyBase {
    pathParams: DeleteApiV1EnvironmentsEnvironmentIdPortsPortPathParams;
}
export declare class DeleteApiV1EnvironmentsEnvironmentIdPortsPortResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    messageCodes?: number;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
