import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioAnalysisFactorExposuresRequestBodyFactors extends SpeakeasyBase {
    factorReturns: number[];
}
export declare class PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios extends SpeakeasyBase {
    portfolioReturns: number[];
}
export declare class PostPortfolioAnalysisFactorExposuresRequestBody extends SpeakeasyBase {
    factors?: PostPortfolioAnalysisFactorExposuresRequestBodyFactors[];
    portfolios: PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios[];
}
export declare class PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios extends SpeakeasyBase {
    portfolioAlpha: number;
    portfolioBetas: number[];
    portfolioRSquared: number;
}
export declare class PostPortfolioAnalysisFactorExposures200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioAnalysisFactorExposuresRequest extends SpeakeasyBase {
    request: PostPortfolioAnalysisFactorExposuresRequestBody;
}
export declare class PostPortfolioAnalysisFactorExposuresResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioAnalysisFactorExposures200ApplicationJsonObject?: PostPortfolioAnalysisFactorExposures200ApplicationJson;
    statusCode: number;
}
