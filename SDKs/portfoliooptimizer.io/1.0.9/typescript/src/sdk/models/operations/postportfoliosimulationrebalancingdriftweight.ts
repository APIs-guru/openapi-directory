import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetPrices" })
  assetPrices: number[];
}


export class PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioSimulationRebalancingDriftWeightRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets })
  assets: PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets[];

  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios })
  portfolios: PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios[];
}


export class PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioValues" })
  portfolioValues: number[];
}


export class PostPortfolioSimulationRebalancingDriftWeight200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios })
  portfolios: PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios[];
}


export class PostPortfolioSimulationRebalancingDriftWeightRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioSimulationRebalancingDriftWeightRequestBody;
}


export class PostPortfolioSimulationRebalancingDriftWeightResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioSimulationRebalancingDriftWeight200ApplicationJsonObject?: PostPortfolioSimulationRebalancingDriftWeight200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
