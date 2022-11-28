import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioOptimizationMaximumReturnRequestBodyConstraints extends SpeakeasyBase {
    assetsGroups?: number[][];
    assetsGroupsMatrix?: number[][];
    maximumAssetsGroupsWeights?: number[];
    maximumAssetsWeights?: number[];
    maximumPortfolioExposure?: number;
    minimumAssetsWeights?: number[];
    minimumPortfolioExposure?: number;
}
export declare class PostPortfolioOptimizationMaximumReturnRequestBody extends SpeakeasyBase {
    assets: number;
    assetsCovarianceMatrix?: number[][];
    assetsReturns: number[];
    constraints?: PostPortfolioOptimizationMaximumReturnRequestBodyConstraints;
}
export declare class PostPortfolioOptimizationMaximumReturn200ApplicationJson extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationMaximumReturnRequest extends SpeakeasyBase {
    request: PostPortfolioOptimizationMaximumReturnRequestBody;
}
export declare class PostPortfolioOptimizationMaximumReturnResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioOptimizationMaximumReturn200ApplicationJsonObject?: PostPortfolioOptimizationMaximumReturn200ApplicationJson;
    statusCode: number;
}
