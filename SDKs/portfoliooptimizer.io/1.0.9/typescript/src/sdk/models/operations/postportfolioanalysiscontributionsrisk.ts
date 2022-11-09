import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioAnalysisContributionsRiskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];

  @Metadata({ data: "json, name=assetsGroups" })
  assetsGroups?: number[][];

  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios })
  portfolios: PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios[];
}


export class PostPortfolioAnalysisContributionsRiskRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisContributionsRiskRequestBody;
}


export class PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsGroupsRiskContributions" })
  assetsGroupsRiskContributions?: number[];

  @Metadata({ data: "json, name=assetsRiskContributions" })
  assetsRiskContributions: number[];
}


export class PostPortfolioAnalysisContributionsRisk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisContributionsRiskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioAnalysisContributionsRisk200ApplicationJsonObject?: PostPortfolioAnalysisContributionsRisk200ApplicationJson;

  @Metadata()
  statusCode: number;
}
