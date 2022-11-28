import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetPrices" })
  assetPrices: number[];
}


export class PostPortfolioSimulationRebalancingRandomWeightRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets })
  assets: PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets[];

  @SpeakeasyMetadata({ data: "json, name=portfolios" })
  portfolios?: number;
}


export class PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioValues" })
  portfolioValues: number[];
}


export class PostPortfolioSimulationRebalancingRandomWeight200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios })
  portfolios: PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios[];
}


export class PostPortfolioSimulationRebalancingRandomWeightRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioSimulationRebalancingRandomWeightRequestBody;
}


export class PostPortfolioSimulationRebalancingRandomWeightResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioSimulationRebalancingRandomWeight200ApplicationJsonObject?: PostPortfolioSimulationRebalancingRandomWeight200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
