import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1EnvironmentsEnvironmentIdUpdatesPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class GetApiV1EnvironmentsEnvironmentIdUpdatesRequest extends SpeakeasyBase {
    pathParams: GetApiV1EnvironmentsEnvironmentIdUpdatesPathParams;
}
export declare class GetApiV1EnvironmentsEnvironmentIdUpdatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cloudEnvironmentResult?: shared.CloudEnvironmentResult;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
