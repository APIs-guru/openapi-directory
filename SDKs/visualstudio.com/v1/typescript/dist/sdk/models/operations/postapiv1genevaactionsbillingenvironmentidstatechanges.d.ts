import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequests extends SpeakeasyBase {
    createEnvironmentStateChangeBody?: shared.CreateEnvironmentStateChangeBody;
    createEnvironmentStateChangeBody1?: shared.CreateEnvironmentStateChangeBody;
    createEnvironmentStateChangeBody2?: shared.CreateEnvironmentStateChangeBody;
    createEnvironmentStateChangeBody3?: shared.CreateEnvironmentStateChangeBody;
}
export declare class PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequest extends SpeakeasyBase {
    pathParams: PostApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams;
    request: PostApiV1GenevaActionsBillingEnvironmentIdStateChangesRequests;
}
export declare class PostApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    environmentStateChange?: shared.EnvironmentStateChange;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
