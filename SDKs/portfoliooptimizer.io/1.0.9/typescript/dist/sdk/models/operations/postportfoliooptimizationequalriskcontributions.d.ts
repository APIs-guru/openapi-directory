import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints extends SpeakeasyBase {
    maximumAssetsWeights?: number[];
    minimumAssetsWeights?: number[];
}
export declare class PostPortfolioOptimizationEqualRiskContributionsRequestBody extends SpeakeasyBase {
    assets: number;
    assetsCovarianceMatrix: number[][];
    constraints?: PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints;
}
export declare class PostPortfolioOptimizationEqualRiskContributions200ApplicationJson extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationEqualRiskContributionsRequest extends SpeakeasyBase {
    request: PostPortfolioOptimizationEqualRiskContributionsRequestBody;
}
export declare class PostPortfolioOptimizationEqualRiskContributionsResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioOptimizationEqualRiskContributions200ApplicationJsonObject?: PostPortfolioOptimizationEqualRiskContributions200ApplicationJson;
    statusCode: number;
}
