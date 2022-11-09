import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetPrices" })
  assetPrices: number[];
}


export class PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioSimulationRebalancingFixedWeightRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets })
  assets: PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets[];

  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios })
  portfolios: PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios[];
}


export class PostPortfolioSimulationRebalancingFixedWeightRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioSimulationRebalancingFixedWeightRequestBody;
}


export class PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolioValues" })
  portfolioValues: number[];
}


export class PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios })
  portfolios: PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios[];
}


export class PostPortfolioSimulationRebalancingFixedWeightResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioSimulationRebalancingFixedWeight200ApplicationJsonObject?: PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson;

  @Metadata()
  statusCode: number;
}
