import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios extends SpeakeasyBase {
    portfolioVolatility: number;
}
export declare class PostPortfolioAnalysisVolatility200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioAnalysisVolatilityRequest extends SpeakeasyBase {
    request: Map<string, any>;
}
export declare class PostPortfolioAnalysisVolatilityResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioAnalysisVolatility200ApplicationJsonObject?: PostPortfolioAnalysisVolatility200ApplicationJson;
    statusCode: number;
}
