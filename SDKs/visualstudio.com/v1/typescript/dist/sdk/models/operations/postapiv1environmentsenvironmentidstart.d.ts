import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiV1EnvironmentsEnvironmentIdStartPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class PostApiV1EnvironmentsEnvironmentIdStartQueryParams extends SpeakeasyBase {
    access?: boolean;
}
export declare class PostApiV1EnvironmentsEnvironmentIdStartRequest extends SpeakeasyBase {
    pathParams: PostApiV1EnvironmentsEnvironmentIdStartPathParams;
    queryParams: PostApiV1EnvironmentsEnvironmentIdStartQueryParams;
}
export declare class PostApiV1EnvironmentsEnvironmentIdStartResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cloudEnvironmentResult?: shared.CloudEnvironmentResult;
    contentType: string;
    messageCodes?: number;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
