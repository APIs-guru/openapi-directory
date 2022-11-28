import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints extends SpeakeasyBase {
    assetsGroups?: number[][];
    assetsGroupsMatrix?: number[][];
    maximumAssetsGroupsWeights?: number[];
    maximumAssetsWeights?: number[];
    maximumPortfolioExposure?: number;
    minimumAssetsWeights?: number[];
    minimumPortfolioExposure?: number;
}
export declare class PostPortfolioOptimizationMaximumSharpeRatioRequestBody extends SpeakeasyBase {
    assets: number;
    assetsCovarianceMatrix: number[][];
    assetsReturns: number[];
    constraints?: PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints;
    riskFreeRate: number;
}
export declare class PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJson extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationMaximumSharpeRatioRequest extends SpeakeasyBase {
    request: PostPortfolioOptimizationMaximumSharpeRatioRequestBody;
}
export declare class PostPortfolioOptimizationMaximumSharpeRatioResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioOptimizationMaximumSharpeRatio200ApplicationJsonObject?: PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJson;
    statusCode: number;
}
