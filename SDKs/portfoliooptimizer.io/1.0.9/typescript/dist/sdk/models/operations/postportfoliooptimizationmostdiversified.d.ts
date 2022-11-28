import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints extends SpeakeasyBase {
    assetsGroups?: number[][];
    assetsGroupsMatrix?: number[][];
    maximumAssetsGroupsWeights?: number[];
    maximumAssetsWeights?: number[];
    maximumPortfolioExposure?: number;
    minimumAssetsWeights?: number[];
    minimumPortfolioExposure?: number;
}
export declare class PostPortfolioOptimizationMostDiversifiedRequestBody extends SpeakeasyBase {
    assets: number;
    assetsCovarianceMatrix: number[][];
    constraints?: PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints;
}
export declare class PostPortfolioOptimizationMostDiversified200ApplicationJson extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationMostDiversifiedRequest extends SpeakeasyBase {
    request: PostPortfolioOptimizationMostDiversifiedRequestBody;
}
export declare class PostPortfolioOptimizationMostDiversifiedResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioOptimizationMostDiversified200ApplicationJsonObject?: PostPortfolioOptimizationMostDiversified200ApplicationJson;
    statusCode: number;
}
