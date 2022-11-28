import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints extends SpeakeasyBase {
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


export class PostPortfolioOptimizationMaximumDecorrelationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];

  @SpeakeasyMetadata({ data: "json, name=assetsReturns" })
  assetsReturns?: number[];

  @SpeakeasyMetadata({ data: "json, name=constraints" })
  constraints?: PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints;
}


export class PostPortfolioOptimizationMaximumDecorrelation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationMaximumDecorrelationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationMaximumDecorrelationRequestBody;
}


export class PostPortfolioOptimizationMaximumDecorrelationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioOptimizationMaximumDecorrelation200ApplicationJsonObject?: PostPortfolioOptimizationMaximumDecorrelation200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
