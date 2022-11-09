import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioOptimizationEqualWeightedRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;
}


export class PostPortfolioOptimizationEqualWeightedRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationEqualWeightedRequestBody;
}


export class PostPortfolioOptimizationEqualWeighted200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationEqualWeightedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioOptimizationEqualWeighted200ApplicationJsonObject?: PostPortfolioOptimizationEqualWeighted200ApplicationJson;

  @Metadata()
  statusCode: number;
}
