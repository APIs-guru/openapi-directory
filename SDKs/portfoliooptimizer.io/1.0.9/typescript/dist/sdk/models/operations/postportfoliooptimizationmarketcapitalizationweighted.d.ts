import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody extends SpeakeasyBase {
    assets: number;
    assetsMarketCapitalizations: number[];
}
export declare class PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJson extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioOptimizationMarketCapitalizationWeightedRequest extends SpeakeasyBase {
    request: PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody;
}
export declare class PostPortfolioOptimizationMarketCapitalizationWeightedResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJsonObject?: PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJson;
    statusCode: number;
}
