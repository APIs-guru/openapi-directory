import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsGroups" })
  assetsGroups?: number[][];

  @SpeakeasyMetadata({ data: "json, name=assetsGroupsMatrix" })
  assetsGroupsMatrix?: number[][];

  @SpeakeasyMetadata({ data: "json, name=maximumAssetsGroupsWeights" })
  maximumAssetsGroupsWeights?: number[];

  @SpeakeasyMetadata({ data: "json, name=maximumAssetsWeights" })
  maximumAssetsWeights?: number[];

  @SpeakeasyMetadata({ data: "json, name=maximumPortfolioExposure" })
  maximumPortfolioExposure?: number;

  @SpeakeasyMetadata({ data: "json, name=minimumAssetsWeights" })
  minimumAssetsWeights?: number[];

  @SpeakeasyMetadata({ data: "json, name=minimumPortfolioExposure" })
  minimumPortfolioExposure?: number;
}


export class PostPortfolioOptimizationMaximumSharpeRatioRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];

  @SpeakeasyMetadata({ data: "json, name=assetsReturns" })
  assetsReturns: number[];

  @SpeakeasyMetadata({ data: "json, name=constraints" })
  constraints?: PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints;

  @SpeakeasyMetadata({ data: "json, name=riskFreeRate" })
  riskFreeRate: number;
}


export class PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationMaximumSharpeRatioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationMaximumSharpeRatioRequestBody;
}


export class PostPortfolioOptimizationMaximumSharpeRatioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioOptimizationMaximumSharpeRatio200ApplicationJsonObject?: PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
