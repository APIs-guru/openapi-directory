import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody extends SpeakeasyBase {
    assets: number;
    assetsCovarianceMatrix: number[][];
    assetsReturns: number[];
    riskFreeRate: number;
}
export declare class PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJson extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationEqualSharpeRatioContributionsRequest extends SpeakeasyBase {
    request: PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody;
}
export declare class PostPortfolioOptimizationEqualSharpeRatioContributionsResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJsonObject?: PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJson;
    statusCode: number;
}
