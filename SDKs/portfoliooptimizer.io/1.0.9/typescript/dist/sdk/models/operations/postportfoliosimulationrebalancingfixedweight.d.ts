import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets extends SpeakeasyBase {
    assetPrices: number[];
}
export declare class PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioSimulationRebalancingFixedWeightRequestBody extends SpeakeasyBase {
    assets: PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets[];
    portfolios: PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios[];
}
export declare class PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios extends SpeakeasyBase {
    portfolioValues: number[];
}
export declare class PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioSimulationRebalancingFixedWeightRequest extends SpeakeasyBase {
    request: PostPortfolioSimulationRebalancingFixedWeightRequestBody;
}
export declare class PostPortfolioSimulationRebalancingFixedWeightResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioSimulationRebalancingFixedWeight200ApplicationJsonObject?: PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson;
    statusCode: number;
}
