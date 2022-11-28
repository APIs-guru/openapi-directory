import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints extends SpeakeasyBase {
    assetsGroups?: number[][];
    assetsGroupsMatrix?: number[][];
    maximumAssetsGroupsWeights?: number[];
    maximumAssetsWeights?: number[];
    maximumPortfolioExposure?: number;
    minimumAssetsWeights?: number[];
    minimumPortfolioExposure?: number;
}
export declare class PostPortfolioOptimizationMinimumVarianceRequestBody extends SpeakeasyBase {
    assets: number;
    assetsCovarianceMatrix: number[][];
    assetsReturns?: number[];
    constraints?: PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints;
}
export declare class PostPortfolioOptimizationMinimumVariance200ApplicationJson extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationMinimumVarianceRequest extends SpeakeasyBase {
    request: PostPortfolioOptimizationMinimumVarianceRequestBody;
}
export declare class PostPortfolioOptimizationMinimumVarianceResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioOptimizationMinimumVariance200ApplicationJsonObject?: PostPortfolioOptimizationMinimumVariance200ApplicationJson;
    statusCode: number;
}
