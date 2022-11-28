import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiV1EnvironmentsQueryParams extends SpeakeasyBase {
    access?: boolean;
}
export declare class PostApiV1EnvironmentsRequests extends SpeakeasyBase {
    createCloudEnvironmentBody?: shared.CreateCloudEnvironmentBody;
    createCloudEnvironmentBody1?: shared.CreateCloudEnvironmentBody;
    createCloudEnvironmentBody2?: shared.CreateCloudEnvironmentBody;
    createCloudEnvironmentBody3?: shared.CreateCloudEnvironmentBody;
}
export declare class PostApiV1EnvironmentsRequest extends SpeakeasyBase {
    queryParams: PostApiV1EnvironmentsQueryParams;
    request?: PostApiV1EnvironmentsRequests;
}
export declare class PostApiV1EnvironmentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cloudEnvironmentResult?: shared.CloudEnvironmentResult;
    contentType: string;
    messageCodes?: number;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
