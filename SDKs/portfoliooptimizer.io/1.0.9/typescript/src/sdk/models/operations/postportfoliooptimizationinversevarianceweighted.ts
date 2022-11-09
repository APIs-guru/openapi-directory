import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioOptimizationInverseVarianceWeightedRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsVariances" })
  assetsVariances: number[];
}


export class PostPortfolioOptimizationInverseVarianceWeightedRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationInverseVarianceWeightedRequestBody;
}


export class PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationInverseVarianceWeightedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioOptimizationInverseVarianceWeighted200ApplicationJsonObject?: PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJson;

  @Metadata()
  statusCode: number;
}
