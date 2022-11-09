import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetPrices" })
  assetPrices: number[];
}


export class PostPortfolioSimulationRebalancingRandomWeightRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets })
  assets: PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets[];

  @Metadata({ data: "json, name=portfolios" })
  portfolios?: number;
}


export class PostPortfolioSimulationRebalancingRandomWeightRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioSimulationRebalancingRandomWeightRequestBody;
}


export class PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolioValues" })
  portfolioValues: number[];
}


export class PostPortfolioSimulationRebalancingRandomWeight200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios })
  portfolios: PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios[];
}


export class PostPortfolioSimulationRebalancingRandomWeightResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioSimulationRebalancingRandomWeight200ApplicationJsonObject?: PostPortfolioSimulationRebalancingRandomWeight200ApplicationJson;

  @Metadata()
  statusCode: number;
}
