import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints extends SpeakeasyBase {
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
}


export class PostPortfolioOptimizationMinimumVarianceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];

  @Metadata({ data: "json, name=assetsReturns" })
  assetsReturns?: number[];

  @Metadata({ data: "json, name=constraints" })
  constraints?: PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints;
}


export class PostPortfolioOptimizationMinimumVarianceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationMinimumVarianceRequestBody;
}


export class PostPortfolioOptimizationMinimumVariance200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationMinimumVarianceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioOptimizationMinimumVariance200ApplicationJsonObject?: PostPortfolioOptimizationMinimumVariance200ApplicationJson;

  @Metadata()
  statusCode: number;
}
