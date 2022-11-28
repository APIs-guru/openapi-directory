import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutApiV1PrebuildsPoolsPoolIdInstancesPathParams extends SpeakeasyBase {
    poolId: string;
}
export declare class PutApiV1PrebuildsPoolsPoolIdInstancesRequests extends SpeakeasyBase {
    createEnvironmentPoolResourceBody?: shared.CreateEnvironmentPoolResourceBody;
    createEnvironmentPoolResourceBody1?: shared.CreateEnvironmentPoolResourceBody;
    createEnvironmentPoolResourceBody2?: shared.CreateEnvironmentPoolResourceBody;
    createEnvironmentPoolResourceBody3?: shared.CreateEnvironmentPoolResourceBody;
}
export declare class PutApiV1PrebuildsPoolsPoolIdInstancesRequest extends SpeakeasyBase {
    pathParams: PutApiV1PrebuildsPoolsPoolIdInstancesPathParams;
    request?: PutApiV1PrebuildsPoolsPoolIdInstancesRequests;
}
export declare class PutApiV1PrebuildsPoolsPoolIdInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
