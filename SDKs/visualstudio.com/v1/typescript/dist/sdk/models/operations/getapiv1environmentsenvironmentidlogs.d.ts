import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApiV1EnvironmentsEnvironmentIdLogsPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class GetApiV1EnvironmentsEnvironmentIdLogsRequest extends SpeakeasyBase {
    pathParams: GetApiV1EnvironmentsEnvironmentIdLogsPathParams;
}
export declare class GetApiV1EnvironmentsEnvironmentIdLogsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getApiV1EnvironmentsEnvironmentIdLogs200ApplicationJsonString?: string;
    getApiV1EnvironmentsEnvironmentIdLogs200TextJsonString?: string;
    getApiV1EnvironmentsEnvironmentIdLogs200TextPlainString?: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
