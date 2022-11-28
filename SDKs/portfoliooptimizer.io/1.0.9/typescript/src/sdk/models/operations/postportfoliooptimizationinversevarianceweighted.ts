import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioOptimizationInverseVarianceWeightedRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsVariances" })
  assetsVariances: number[];
}


export class PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationInverseVarianceWeightedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationInverseVarianceWeightedRequestBody;
}


export class PostPortfolioOptimizationInverseVarianceWeightedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioOptimizationInverseVarianceWeighted200ApplicationJsonObject?: PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
