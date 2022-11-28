import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioOptimizationEqualWeightedRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;
}


export class PostPortfolioOptimizationEqualWeighted200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationEqualWeightedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationEqualWeightedRequestBody;
}


export class PostPortfolioOptimizationEqualWeightedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioOptimizationEqualWeighted200ApplicationJsonObject?: PostPortfolioOptimizationEqualWeighted200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
