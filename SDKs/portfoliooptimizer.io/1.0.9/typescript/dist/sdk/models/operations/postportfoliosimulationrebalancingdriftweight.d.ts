import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets extends SpeakeasyBase {
    assetPrices: number[];
}
export declare class PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioSimulationRebalancingDriftWeightRequestBody extends SpeakeasyBase {
    assets: PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets[];
    portfolios: PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios[];
}
export declare class PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios extends SpeakeasyBase {
    portfolioValues: number[];
}
export declare class PostPortfolioSimulationRebalancingDriftWeight200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioSimulationRebalancingDriftWeightRequest extends SpeakeasyBase {
    request: PostPortfolioSimulationRebalancingDriftWeightRequestBody;
}
export declare class PostPortfolioSimulationRebalancingDriftWeightResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioSimulationRebalancingDriftWeight200ApplicationJsonObject?: PostPortfolioSimulationRebalancingDriftWeight200ApplicationJson;
    statusCode: number;
}
