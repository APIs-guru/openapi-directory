import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class GetApiV1GenevaActionsBillingEnvironmentIdStateChangesRequest extends SpeakeasyBase {
    pathParams: GetApiV1GenevaActionsBillingEnvironmentIdStateChangesPathParams;
}
export declare class GetApiV1GenevaActionsBillingEnvironmentIdStateChangesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    environmentStateChange?: shared.EnvironmentStateChange;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
