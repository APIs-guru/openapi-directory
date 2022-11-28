import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios extends SpeakeasyBase {
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisReturnsAverageRequestBody extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios[];
}
export declare class PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios extends SpeakeasyBase {
    portfolioAverageReturn: number;
}
export declare class PostPortfolioAnalysisReturnsAverage200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioAnalysisReturnsAverageRequest extends SpeakeasyBase {
    request: PostPortfolioAnalysisReturnsAverageRequestBody;
}
export declare class PostPortfolioAnalysisReturnsAverageResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioAnalysisReturnsAverage200ApplicationJsonObject?: PostPortfolioAnalysisReturnsAverage200ApplicationJson;
    statusCode: number;
}
