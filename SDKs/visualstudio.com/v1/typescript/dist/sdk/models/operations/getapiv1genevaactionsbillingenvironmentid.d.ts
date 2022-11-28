import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1GenevaActionsBillingEnvironmentIdPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class GetApiV1GenevaActionsBillingEnvironmentIdQueryParams extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
export declare class GetApiV1GenevaActionsBillingEnvironmentIdRequest extends SpeakeasyBase {
    pathParams: GetApiV1GenevaActionsBillingEnvironmentIdPathParams;
    queryParams: GetApiV1GenevaActionsBillingEnvironmentIdQueryParams;
}
export declare class GetApiV1GenevaActionsBillingEnvironmentIdResponse extends SpeakeasyBase {
    billSummary?: shared.BillSummary;
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
