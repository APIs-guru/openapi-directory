import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints extends SpeakeasyBase {
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


export class PostPortfolioOptimizationMaximumDecorrelationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];

  @Metadata({ data: "json, name=assetsReturns" })
  assetsReturns?: number[];

  @Metadata({ data: "json, name=constraints" })
  constraints?: PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints;
}


export class PostPortfolioOptimizationMaximumDecorrelationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationMaximumDecorrelationRequestBody;
}


export class PostPortfolioOptimizationMaximumDecorrelation200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationMaximumDecorrelationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioOptimizationMaximumDecorrelation200ApplicationJsonObject?: PostPortfolioOptimizationMaximumDecorrelation200ApplicationJson;

  @Metadata()
  statusCode: number;
}
