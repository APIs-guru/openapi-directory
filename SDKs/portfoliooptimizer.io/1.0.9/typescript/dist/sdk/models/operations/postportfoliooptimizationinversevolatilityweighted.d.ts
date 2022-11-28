import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioOptimizationInverseVolatilityWeightedRequestBody extends SpeakeasyBase {
    assets: number;
    assetsVolatilities: number[];
}
export declare class PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJson extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationInverseVolatilityWeightedRequest extends SpeakeasyBase {
    request: PostPortfolioOptimizationInverseVolatilityWeightedRequestBody;
}
export declare class PostPortfolioOptimizationInverseVolatilityWeightedResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioOptimizationInverseVolatilityWeighted200ApplicationJsonObject?: PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJson;
    statusCode: number;
}
