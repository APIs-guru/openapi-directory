import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints extends SpeakeasyBase {
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


export class PostPortfolioOptimizationMostDiversifiedRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];

  @SpeakeasyMetadata({ data: "json, name=constraints" })
  constraints?: PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints;
}


export class PostPortfolioOptimizationMostDiversified200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationMostDiversifiedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationMostDiversifiedRequestBody;
}


export class PostPortfolioOptimizationMostDiversifiedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioOptimizationMostDiversified200ApplicationJsonObject?: PostPortfolioOptimizationMostDiversified200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
