import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiV1PrebuildsTemplatesRequests extends SpeakeasyBase {
    createCloudEnvironmentBody?: shared.CreateCloudEnvironmentBody;
    createCloudEnvironmentBody1?: shared.CreateCloudEnvironmentBody;
    createCloudEnvironmentBody2?: shared.CreateCloudEnvironmentBody;
    createCloudEnvironmentBody3?: shared.CreateCloudEnvironmentBody;
}
export declare class PostApiV1PrebuildsTemplatesRequest extends SpeakeasyBase {
    request?: PostApiV1PrebuildsTemplatesRequests;
}
export declare class PostApiV1PrebuildsTemplatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cloudEnvironmentResult?: shared.CloudEnvironmentResult;
    contentType: string;
    messageCodes?: number;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
