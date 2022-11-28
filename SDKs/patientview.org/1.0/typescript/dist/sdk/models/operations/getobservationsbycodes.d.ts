import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetObservationsByCodesPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetObservationsByCodesQueryParams extends SpeakeasyBase {
    code: string[];
    limit: number;
    offset: number;
    orderDirection: string;
}
export declare class GetObservationsByCodesRequest extends SpeakeasyBase {
    pathParams: GetObservationsByCodesPathParams;
    queryParams: GetObservationsByCodesQueryParams;
}
export declare class GetObservationsByCodesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
