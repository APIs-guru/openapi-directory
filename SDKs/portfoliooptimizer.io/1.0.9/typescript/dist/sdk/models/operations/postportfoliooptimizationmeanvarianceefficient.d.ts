import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints extends SpeakeasyBase {
    assetsGroups?: number[][];
    assetsGroupsMatrix?: number[][];
    maximumAssetsGroupsWeights?: number[];
    maximumAssetsWeights?: number[];
    maximumPortfolioExposure?: number;
    minimumAssetsWeights?: number[];
    minimumPortfolioExposure?: number;
    portfolioReturn?: number;
    portfolioVolatility?: number;
    riskTolerance?: number;
}
export declare class PostPortfolioOptimizationMeanVarianceEfficientRequestBody extends SpeakeasyBase {
    assets: number;
    assetsCovarianceMatrix: number[][];
    assetsReturns: number[];
    constraints: PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints;
}
export declare class PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJson extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationMeanVarianceEfficientRequest extends SpeakeasyBase {
    request: PostPortfolioOptimizationMeanVarianceEfficientRequestBody;
}
export declare class PostPortfolioOptimizationMeanVarianceEfficientResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioOptimizationMeanVarianceEfficient200ApplicationJsonObject?: PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJson;
    statusCode: number;
}
