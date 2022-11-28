import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetComparisonShoppingPagesIdListingsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetComparisonShoppingPagesIdListingsQueryParams extends SpeakeasyBase {
    condition: string;
    offset?: number;
    page?: number;
    perPage?: number;
}
export declare class GetComparisonShoppingPagesIdListingsRequest extends SpeakeasyBase {
    pathParams: GetComparisonShoppingPagesIdListingsPathParams;
    queryParams: GetComparisonShoppingPagesIdListingsQueryParams;
}
export declare class GetComparisonShoppingPagesIdListingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
