import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiV1PrebuildsPoolsPoolIdInstancesPathParams extends SpeakeasyBase {
    poolId: string;
}
export declare class PostApiV1PrebuildsPoolsPoolIdInstancesRequests extends SpeakeasyBase {
    createEnvironmentPoolResourceBody?: shared.CreateEnvironmentPoolResourceBody;
    createEnvironmentPoolResourceBody1?: shared.CreateEnvironmentPoolResourceBody;
    createEnvironmentPoolResourceBody2?: shared.CreateEnvironmentPoolResourceBody;
    createEnvironmentPoolResourceBody3?: shared.CreateEnvironmentPoolResourceBody;
}
export declare class PostApiV1PrebuildsPoolsPoolIdInstancesRequest extends SpeakeasyBase {
    pathParams: PostApiV1PrebuildsPoolsPoolIdInstancesPathParams;
    request?: PostApiV1PrebuildsPoolsPoolIdInstancesRequests;
}
export declare class PostApiV1PrebuildsPoolsPoolIdInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
