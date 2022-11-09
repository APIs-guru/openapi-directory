import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints extends SpeakeasyBase {
  @Metadata({ data: "json, name=maximumAssetsWeights" })
  maximumAssetsWeights?: number[];

  @Metadata({ data: "json, name=minimumAssetsWeights" })
  minimumAssetsWeights?: number[];
}


export class PostPortfolioOptimizationEqualRiskContributionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];

  @Metadata({ data: "json, name=constraints" })
  constraints?: PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints;
}


export class PostPortfolioOptimizationEqualRiskContributionsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationEqualRiskContributionsRequestBody;
}


export class PostPortfolioOptimizationEqualRiskContributions200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationEqualRiskContributionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioOptimizationEqualRiskContributions200ApplicationJsonObject?: PostPortfolioOptimizationEqualRiskContributions200ApplicationJson;

  @Metadata()
  statusCode: number;
}
