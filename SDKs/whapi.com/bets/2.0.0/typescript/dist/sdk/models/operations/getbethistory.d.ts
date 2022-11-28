import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBetHistoryQueryParams extends SpeakeasyBase {
    dateFrom: string;
    dateTo: string;
    exclude?: string[];
    fields?: string[];
    include?: string[];
    page?: number;
    pageSize?: number;
    settled?: boolean;
    sort?: string;
}
export declare class GetBetHistoryHeaders extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
    apiTicket: string;
}
export declare class GetBetHistoryRequest extends SpeakeasyBase {
    queryParams: GetBetHistoryQueryParams;
    headers: GetBetHistoryHeaders;
}
export declare class GetBetHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    betHistoryResponse?: shared.BetHistoryResponse;
    errors?: shared.Errors;
}
