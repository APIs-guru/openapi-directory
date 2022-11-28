import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints extends SpeakeasyBase {
    assetsGroups?: number[][];
    assetsGroupsMatrix?: number[][];
    maximumAssetsGroupsWeights?: number[];
    maximumAssetsWeights?: number[];
    maximumPortfolioExposure?: number;
    minimumAssetsWeights?: number[];
    minimumPortfolioExposure?: number;
}
export declare class PostPortfolioOptimizationMaximumDecorrelationRequestBody extends SpeakeasyBase {
    assets: number;
    assetsCorrelationMatrix: number[][];
    assetsReturns?: number[];
    constraints?: PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints;
}
export declare class PostPortfolioOptimizationMaximumDecorrelation200ApplicationJson extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationMaximumDecorrelationRequest extends SpeakeasyBase {
    request: PostPortfolioOptimizationMaximumDecorrelationRequestBody;
}
export declare class PostPortfolioOptimizationMaximumDecorrelationResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioOptimizationMaximumDecorrelation200ApplicationJsonObject?: PostPortfolioOptimizationMaximumDecorrelation200ApplicationJson;
    statusCode: number;
}
