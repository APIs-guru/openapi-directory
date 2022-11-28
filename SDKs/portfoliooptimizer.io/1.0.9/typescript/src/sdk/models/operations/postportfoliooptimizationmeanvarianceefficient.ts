import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=portfolioReturn" })
  portfolioReturn?: number;

  @SpeakeasyMetadata({ data: "json, name=portfolioVolatility" })
  portfolioVolatility?: number;

  @SpeakeasyMetadata({ data: "json, name=riskTolerance" })
  riskTolerance?: number;
}


export class PostPortfolioOptimizationMeanVarianceEfficientRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];

  @SpeakeasyMetadata({ data: "json, name=assetsReturns" })
  assetsReturns: number[];

  @SpeakeasyMetadata({ data: "json, name=constraints" })
  constraints: PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints;
}


export class PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationMeanVarianceEfficientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationMeanVarianceEfficientRequestBody;
}


export class PostPortfolioOptimizationMeanVarianceEfficientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioOptimizationMeanVarianceEfficient200ApplicationJsonObject?: PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
