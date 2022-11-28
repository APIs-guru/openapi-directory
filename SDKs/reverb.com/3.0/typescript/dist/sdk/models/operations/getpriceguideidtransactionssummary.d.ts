import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPriceguideIdTransactionsSummaryPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPriceguideIdTransactionsSummaryQueryParams extends SpeakeasyBase {
    condition?: string;
    numberOfMonths?: number;
}
export declare class GetPriceguideIdTransactionsSummaryRequest extends SpeakeasyBase {
    pathParams: GetPriceguideIdTransactionsSummaryPathParams;
    queryParams: GetPriceguideIdTransactionsSummaryQueryParams;
}
export declare class GetPriceguideIdTransactionsSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
