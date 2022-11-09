import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioAnalysisContributionsReturnRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsGroups" })
  assetsGroups?: number[][];

  @Metadata({ data: "json, name=assetsReturns" })
  assetsReturns: number[];

  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios })
  portfolios: PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios[];
}


export class PostPortfolioAnalysisContributionsReturnRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisContributionsReturnRequestBody;
}


export class PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsGroupsReturnContributions" })
  assetsGroupsReturnContributions?: number[];

  @Metadata({ data: "json, name=assetsReturnContributions" })
  assetsReturnContributions: number[];
}


export class PostPortfolioAnalysisContributionsReturn200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisContributionsReturnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioAnalysisContributionsReturn200ApplicationJsonObject?: PostPortfolioAnalysisContributionsReturn200ApplicationJson;

  @Metadata()
  statusCode: number;
}
