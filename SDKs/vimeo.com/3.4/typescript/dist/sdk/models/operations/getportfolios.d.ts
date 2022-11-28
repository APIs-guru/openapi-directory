import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPortfoliosPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum GetPortfoliosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetPortfoliosSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetPortfoliosQueryParams extends SpeakeasyBase {
    direction?: GetPortfoliosDirectionEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetPortfoliosSortEnum;
}
export declare class GetPortfoliosRequest extends SpeakeasyBase {
    pathParams: GetPortfoliosPathParams;
    queryParams: GetPortfoliosQueryParams;
}
export declare class GetPortfoliosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    portfolios?: shared.Portfolio[];
}
