import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioOptimizationInverseVolatilityWeightedRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsVolatilities" })
  assetsVolatilities: number[];
}


export class PostPortfolioOptimizationInverseVolatilityWeightedRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationInverseVolatilityWeightedRequestBody;
}


export class PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationInverseVolatilityWeightedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioOptimizationInverseVolatilityWeighted200ApplicationJsonObject?: PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJson;

  @Metadata()
  statusCode: number;
}
