import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMeReputationHistoryQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetMeReputationHistoryRequest extends SpeakeasyBase {
    queryParams: GetMeReputationHistoryQueryParams;
}
export declare class GetMeReputationHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
