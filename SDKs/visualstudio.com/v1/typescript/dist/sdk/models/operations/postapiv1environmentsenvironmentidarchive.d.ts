import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiV1EnvironmentsEnvironmentIdArchivePathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class PostApiV1EnvironmentsEnvironmentIdArchiveRequest extends SpeakeasyBase {
    pathParams: PostApiV1EnvironmentsEnvironmentIdArchivePathParams;
}
export declare class PostApiV1EnvironmentsEnvironmentIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cloudEnvironmentResult?: shared.CloudEnvironmentResult;
    contentType: string;
    messageCodes?: number;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
