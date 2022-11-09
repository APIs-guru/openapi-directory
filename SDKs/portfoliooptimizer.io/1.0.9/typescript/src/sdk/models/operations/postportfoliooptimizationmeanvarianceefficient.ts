import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsGroups" })
  assetsGroups?: number[][];

  @Metadata({ data: "json, name=assetsGroupsMatrix" })
  assetsGroupsMatrix?: number[][];

  @Metadata({ data: "json, name=maximumAssetsGroupsWeights" })
  maximumAssetsGroupsWeights?: number[];

  @Metadata({ data: "json, name=maximumAssetsWeights" })
  maximumAssetsWeights?: number[];

  @Metadata({ data: "json, name=maximumPortfolioExposure" })
  maximumPortfolioExposure?: number;

  @Metadata({ data: "json, name=minimumAssetsWeights" })
  minimumAssetsWeights?: number[];

  @Metadata({ data: "json, name=minimumPortfolioExposure" })
  minimumPortfolioExposure?: number;

  @Metadata({ data: "json, name=portfolioReturn" })
  portfolioReturn?: number;

  @Metadata({ data: "json, name=portfolioVolatility" })
  portfolioVolatility?: number;

  @Metadata({ data: "json, name=riskTolerance" })
  riskTolerance?: number;
}


export class PostPortfolioOptimizationMeanVarianceEfficientRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];

  @Metadata({ data: "json, name=assetsReturns" })
  assetsReturns: number[];

  @Metadata({ data: "json, name=constraints" })
  constraints: PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints;
}


export class PostPortfolioOptimizationMeanVarianceEfficientRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationMeanVarianceEfficientRequestBody;
}


export class PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationMeanVarianceEfficientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioOptimizationMeanVarianceEfficient200ApplicationJsonObject?: PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJson;

  @Metadata()
  statusCode: number;
}
