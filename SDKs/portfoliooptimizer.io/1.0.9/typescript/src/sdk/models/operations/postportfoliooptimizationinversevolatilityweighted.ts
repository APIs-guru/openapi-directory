import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioOptimizationInverseVolatilityWeightedRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsVolatilities" })
  assetsVolatilities: number[];
}


export class PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationInverseVolatilityWeightedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationInverseVolatilityWeightedRequestBody;
}


export class PostPortfolioOptimizationInverseVolatilityWeightedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioOptimizationInverseVolatilityWeighted200ApplicationJsonObject?: PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
