import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioAnalysisContributionsReturnRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsGroups" })
  assetsGroups?: number[][];

  @SpeakeasyMetadata({ data: "json, name=assetsReturns" })
  assetsReturns: number[];

  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios })
  portfolios: PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios[];
}


export class PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsGroupsReturnContributions" })
  assetsGroupsReturnContributions?: number[];

  @SpeakeasyMetadata({ data: "json, name=assetsReturnContributions" })
  assetsReturnContributions: number[];
}


export class PostPortfolioAnalysisContributionsReturn200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisContributionsReturnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisContributionsReturnRequestBody;
}


export class PostPortfolioAnalysisContributionsReturnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioAnalysisContributionsReturn200ApplicationJsonObject?: PostPortfolioAnalysisContributionsReturn200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
