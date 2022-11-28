import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductReviewsQueryParams extends SpeakeasyBase {
    code?: string;
    showUnavailable?: boolean;
    sortOrder?: shared.SortOrderReviewEnum;
    topX?: string;
}
export declare class ProductReviewsHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class ProductReviews200ApplicationJson extends SpeakeasyBase {
    data?: shared.ReviewObject[];
    dateStamp?: string;
    errorCodes?: string[];
    errorMessage?: any[];
    errorMessageText?: string;
    errorName?: string;
    errorReference?: string;
    errorType?: string;
    extraInfo?: Map<string, any>;
    extraObject?: Map<string, any>;
    success?: boolean;
    totalCount?: number;
    vmid?: string;
}
export declare class ProductReviewsRequest extends SpeakeasyBase {
    queryParams: ProductReviewsQueryParams;
    headers: ProductReviewsHeaders;
}
export declare class ProductReviewsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    productReviews200ApplicationJsonObject?: ProductReviews200ApplicationJson;
}
