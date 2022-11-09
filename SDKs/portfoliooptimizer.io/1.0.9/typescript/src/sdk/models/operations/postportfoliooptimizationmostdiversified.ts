import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints extends SpeakeasyBase {
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


export class PostPortfolioOptimizationMostDiversifiedRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];

  @Metadata({ data: "json, name=constraints" })
  constraints?: PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints;
}


export class PostPortfolioOptimizationMostDiversifiedRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationMostDiversifiedRequestBody;
}


export class PostPortfolioOptimizationMostDiversified200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationMostDiversifiedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioOptimizationMostDiversified200ApplicationJsonObject?: PostPortfolioOptimizationMostDiversified200ApplicationJson;

  @Metadata()
  statusCode: number;
}
