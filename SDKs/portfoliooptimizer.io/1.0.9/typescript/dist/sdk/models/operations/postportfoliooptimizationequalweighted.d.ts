import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioOptimizationEqualWeightedRequestBody extends SpeakeasyBase {
    assets: number;
}
export declare class PostPortfolioOptimizationEqualWeighted200ApplicationJson extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationEqualWeightedRequest extends SpeakeasyBase {
    request: PostPortfolioOptimizationEqualWeightedRequestBody;
}
export declare class PostPortfolioOptimizationEqualWeightedResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioOptimizationEqualWeighted200ApplicationJsonObject?: PostPortfolioOptimizationEqualWeighted200ApplicationJson;
    statusCode: number;
}
