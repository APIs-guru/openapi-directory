import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioOptimizationMinimumCorrelationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];

  @Metadata({ data: "json, name=assetsVolatilities" })
  assetsVolatilities: number[];
}


export class PostPortfolioOptimizationMinimumCorrelationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationMinimumCorrelationRequestBody;
}


export class PostPortfolioOptimizationMinimumCorrelation200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationMinimumCorrelationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioOptimizationMinimumCorrelation200ApplicationJsonObject?: PostPortfolioOptimizationMinimumCorrelation200ApplicationJson;

  @Metadata()
  statusCode: number;
}
