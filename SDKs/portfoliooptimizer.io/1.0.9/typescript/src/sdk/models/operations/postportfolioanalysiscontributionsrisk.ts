import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioAnalysisContributionsRiskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];

  @SpeakeasyMetadata({ data: "json, name=assetsGroups" })
  assetsGroups?: number[][];

  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios })
  portfolios: PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios[];
}


export class PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsGroupsRiskContributions" })
  assetsGroupsRiskContributions?: number[];

  @SpeakeasyMetadata({ data: "json, name=assetsRiskContributions" })
  assetsRiskContributions: number[];
}


export class PostPortfolioAnalysisContributionsRisk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisContributionsRiskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisContributionsRiskRequestBody;
}


export class PostPortfolioAnalysisContributionsRiskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioAnalysisContributionsRisk200ApplicationJsonObject?: PostPortfolioAnalysisContributionsRisk200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
