import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];

  @Metadata({ data: "json, name=assetsReturns" })
  assetsReturns: number[];

  @Metadata({ data: "json, name=riskFreeRate" })
  riskFreeRate: number;
}


export class PostPortfolioOptimizationEqualSharpeRatioContributionsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody;
}


export class PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationEqualSharpeRatioContributionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJsonObject?: PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJson;

  @Metadata()
  statusCode: number;
}
