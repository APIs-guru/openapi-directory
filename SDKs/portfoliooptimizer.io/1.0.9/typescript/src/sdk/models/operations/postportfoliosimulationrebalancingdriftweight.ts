import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetPrices" })
  assetPrices: number[];
}


export class PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioSimulationRebalancingDriftWeightRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets })
  assets: PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets[];

  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios })
  portfolios: PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios[];
}


export class PostPortfolioSimulationRebalancingDriftWeightRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioSimulationRebalancingDriftWeightRequestBody;
}


export class PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolioValues" })
  portfolioValues: number[];
}


export class PostPortfolioSimulationRebalancingDriftWeight200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios })
  portfolios: PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios[];
}


export class PostPortfolioSimulationRebalancingDriftWeightResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioSimulationRebalancingDriftWeight200ApplicationJsonObject?: PostPortfolioSimulationRebalancingDriftWeight200ApplicationJson;

  @Metadata()
  statusCode: number;
}
