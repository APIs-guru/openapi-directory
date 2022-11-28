import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiV1EnvironmentsEnvironmentIdExportPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class PostApiV1EnvironmentsEnvironmentIdExportRequest extends SpeakeasyBase {
    pathParams: PostApiV1EnvironmentsEnvironmentIdExportPathParams;
}
export declare class PostApiV1EnvironmentsEnvironmentIdExportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cloudEnvironmentResult?: shared.CloudEnvironmentResult;
    contentType: string;
    messageCodes?: number;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
