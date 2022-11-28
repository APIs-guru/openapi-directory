import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];

  @SpeakeasyMetadata({ data: "json, name=assetsReturns" })
  assetsReturns: number[];

  @SpeakeasyMetadata({ data: "json, name=riskFreeRate" })
  riskFreeRate: number;
}


export class PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationEqualSharpeRatioContributionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody;
}


export class PostPortfolioOptimizationEqualSharpeRatioContributionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJsonObject?: PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
