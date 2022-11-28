import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPortfoliosAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetPortfoliosAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetPortfoliosAlt1QueryParams extends SpeakeasyBase {
    direction?: GetPortfoliosAlt1DirectionEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetPortfoliosAlt1SortEnum;
}
export declare class GetPortfoliosAlt1Request extends SpeakeasyBase {
    queryParams: GetPortfoliosAlt1QueryParams;
}
export declare class GetPortfoliosAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    portfolios?: shared.Portfolio[];
}
