import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioOptimizationInverseVarianceWeightedRequestBody extends SpeakeasyBase {
    assets: number;
    assetsVariances: number[];
}
export declare class PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJson extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationInverseVarianceWeightedRequest extends SpeakeasyBase {
    request: PostPortfolioOptimizationInverseVarianceWeightedRequestBody;
}
export declare class PostPortfolioOptimizationInverseVarianceWeightedResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioOptimizationInverseVarianceWeighted200ApplicationJsonObject?: PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJson;
    statusCode: number;
}
