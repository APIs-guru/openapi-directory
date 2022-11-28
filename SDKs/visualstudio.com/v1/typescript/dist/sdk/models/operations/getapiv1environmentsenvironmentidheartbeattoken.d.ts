import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1EnvironmentsEnvironmentIdHeartbeattokenPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class GetApiV1EnvironmentsEnvironmentIdHeartbeattokenRequest extends SpeakeasyBase {
    pathParams: GetApiV1EnvironmentsEnvironmentIdHeartbeattokenPathParams;
}
export declare class GetApiV1EnvironmentsEnvironmentIdHeartbeattokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cloudEnvironmentResult?: shared.CloudEnvironmentResult;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
