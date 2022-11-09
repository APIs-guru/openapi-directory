import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioOptimizationMaximumReturnRequestBodyConstraints extends SpeakeasyBase {
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


export class PostPortfolioOptimizationMaximumReturnRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix?: number[][];

  @Metadata({ data: "json, name=assetsReturns" })
  assetsReturns: number[];

  @Metadata({ data: "json, name=constraints" })
  constraints?: PostPortfolioOptimizationMaximumReturnRequestBodyConstraints;
}


export class PostPortfolioOptimizationMaximumReturnRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationMaximumReturnRequestBody;
}


export class PostPortfolioOptimizationMaximumReturn200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationMaximumReturnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioOptimizationMaximumReturn200ApplicationJsonObject?: PostPortfolioOptimizationMaximumReturn200ApplicationJson;

  @Metadata()
  statusCode: number;
}
