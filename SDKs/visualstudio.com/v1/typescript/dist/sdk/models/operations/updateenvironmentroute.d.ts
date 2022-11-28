import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEnvironmentRoutePathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class UpdateEnvironmentRouteRequests extends SpeakeasyBase {
    environmentRegistrationCallbackBody?: shared.EnvironmentRegistrationCallbackBody;
    environmentRegistrationCallbackBody1?: shared.EnvironmentRegistrationCallbackBody;
    environmentRegistrationCallbackBody2?: shared.EnvironmentRegistrationCallbackBody;
    environmentRegistrationCallbackBody3?: shared.EnvironmentRegistrationCallbackBody;
}
export declare class UpdateEnvironmentRouteRequest extends SpeakeasyBase {
    pathParams: UpdateEnvironmentRoutePathParams;
    request?: UpdateEnvironmentRouteRequests;
}
export declare class UpdateEnvironmentRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cloudEnvironmentResult?: shared.CloudEnvironmentResult;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
