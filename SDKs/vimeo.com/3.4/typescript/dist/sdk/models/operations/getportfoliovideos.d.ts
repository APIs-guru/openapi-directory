import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPortfolioVideosPathParams extends SpeakeasyBase {
    portfolioId: number;
    userId: number;
}
export declare enum GetPortfolioVideosFilterEnum {
    Embeddable = "embeddable"
}
export declare enum GetPortfolioVideosSortEnum {
    Alphabetical = "alphabetical",
    Comments = "comments",
    Date = "date",
    Default = "default",
    Likes = "likes",
    Manual = "manual",
    Plays = "plays"
}
export declare class GetPortfolioVideosQueryParams extends SpeakeasyBase {
    containingUri?: string;
    filter?: GetPortfolioVideosFilterEnum;
    filterEmbeddable?: boolean;
    page?: number;
    perPage?: number;
    sort?: GetPortfolioVideosSortEnum;
}
export declare class GetPortfolioVideosRequest extends SpeakeasyBase {
    pathParams: GetPortfolioVideosPathParams;
    queryParams: GetPortfolioVideosQueryParams;
}
export declare class GetPortfolioVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videos?: shared.Video[];
}
