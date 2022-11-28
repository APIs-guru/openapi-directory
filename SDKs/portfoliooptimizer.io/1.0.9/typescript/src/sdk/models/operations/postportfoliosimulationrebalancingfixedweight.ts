import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetPrices" })
  assetPrices: number[];
}


export class PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioSimulationRebalancingFixedWeightRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets })
  assets: PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets[];

  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios })
  portfolios: PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios[];
}


export class PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioValues" })
  portfolioValues: number[];
}


export class PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios })
  portfolios: PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios[];
}


export class PostPortfolioSimulationRebalancingFixedWeightRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioSimulationRebalancingFixedWeightRequestBody;
}


export class PostPortfolioSimulationRebalancingFixedWeightResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioSimulationRebalancingFixedWeight200ApplicationJsonObject?: PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
