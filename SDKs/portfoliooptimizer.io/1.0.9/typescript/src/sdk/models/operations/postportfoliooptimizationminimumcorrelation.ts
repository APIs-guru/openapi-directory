import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioOptimizationMinimumCorrelationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];

  @SpeakeasyMetadata({ data: "json, name=assetsVolatilities" })
  assetsVolatilities: number[];
}


export class PostPortfolioOptimizationMinimumCorrelation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationMinimumCorrelationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationMinimumCorrelationRequestBody;
}


export class PostPortfolioOptimizationMinimumCorrelationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioOptimizationMinimumCorrelation200ApplicationJsonObject?: PostPortfolioOptimizationMinimumCorrelation200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
