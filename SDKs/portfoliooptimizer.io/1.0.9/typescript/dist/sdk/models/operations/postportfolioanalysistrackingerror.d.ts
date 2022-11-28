import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios extends SpeakeasyBase {
    portfolioReturns: number[];
}
export declare class PostPortfolioAnalysisTrackingErrorRequestBody extends SpeakeasyBase {
    benchmarkReturns: number[];
    portfolios: PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios[];
}
export declare class PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios extends SpeakeasyBase {
    portfolioTrackingError: number;
}
export declare class PostPortfolioAnalysisTrackingError200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioAnalysisTrackingErrorRequest extends SpeakeasyBase {
    request: PostPortfolioAnalysisTrackingErrorRequestBody;
}
export declare class PostPortfolioAnalysisTrackingErrorResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioAnalysisTrackingError200ApplicationJsonObject?: PostPortfolioAnalysisTrackingError200ApplicationJson;
    statusCode: number;
}
