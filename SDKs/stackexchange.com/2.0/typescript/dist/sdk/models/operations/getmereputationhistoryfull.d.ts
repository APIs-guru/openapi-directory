import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMeReputationHistoryFullQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetMeReputationHistoryFullRequest extends SpeakeasyBase {
    queryParams: GetMeReputationHistoryFullQueryParams;
}
export declare class GetMeReputationHistoryFullResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
