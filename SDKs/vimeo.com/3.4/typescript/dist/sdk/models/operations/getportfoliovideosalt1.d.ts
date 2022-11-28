import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPortfolioVideosAlt1PathParams extends SpeakeasyBase {
    portfolioId: number;
}
export declare enum GetPortfolioVideosAlt1FilterEnum {
    Embeddable = "embeddable"
}
export declare enum GetPortfolioVideosAlt1SortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Default = "default",
    Likes = "likes",
    Manual = "manual",
    Plays = "plays"
}
export declare class GetPortfolioVideosAlt1QueryParams extends SpeakeasyBase {
    containingUri?: string;
    filter?: GetPortfolioVideosAlt1FilterEnum;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    sort?: GetPortfolioVideosAlt1SortEnum;
}
export declare class GetPortfolioVideosAlt1Request extends SpeakeasyBase {
    pathParams: GetPortfolioVideosAlt1PathParams;
    queryParams: GetPortfolioVideosAlt1QueryParams;
}
export declare class GetPortfolioVideosAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videos?: shared.Video[];
}
