import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets extends SpeakeasyBase {
    assetPrices: number[];
}
export declare class PostPortfolioSimulationRebalancingRandomWeightRequestBody extends SpeakeasyBase {
    assets: PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets[];
    portfolios?: number;
}
export declare class PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios extends SpeakeasyBase {
    portfolioValues: number[];
}
export declare class PostPortfolioSimulationRebalancingRandomWeight200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioSimulationRebalancingRandomWeightRequest extends SpeakeasyBase {
    request: PostPortfolioSimulationRebalancingRandomWeightRequestBody;
}
export declare class PostPortfolioSimulationRebalancingRandomWeightResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioSimulationRebalancingRandomWeight200ApplicationJsonObject?: PostPortfolioSimulationRebalancingRandomWeight200ApplicationJson;
    statusCode: number;
}
