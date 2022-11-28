import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios extends SpeakeasyBase {
    portfolioAlpha: number;
}
export declare class PostPortfolioAnalysisAlpha200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioAnalysisAlphaRequest extends SpeakeasyBase {
    request: Map<string, any>;
}
export declare class PostPortfolioAnalysisAlphaResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioAnalysisAlpha200ApplicationJsonObject?: PostPortfolioAnalysisAlpha200ApplicationJson;
    statusCode: number;
}
