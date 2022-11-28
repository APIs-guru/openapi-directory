import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiV1EnvironmentsEnvironmentIdShutdownPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class PostApiV1EnvironmentsEnvironmentIdShutdownRequest extends SpeakeasyBase {
    pathParams: PostApiV1EnvironmentsEnvironmentIdShutdownPathParams;
}
export declare class PostApiV1EnvironmentsEnvironmentIdShutdownResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cloudEnvironmentResult?: shared.CloudEnvironmentResult;
    contentType: string;
    messageCodes?: number;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
