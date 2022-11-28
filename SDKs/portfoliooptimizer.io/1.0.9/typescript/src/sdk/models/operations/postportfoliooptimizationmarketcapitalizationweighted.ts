import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsMarketCapitalizations" })
  assetsMarketCapitalizations: number[];
}


export class PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationMarketCapitalizationWeightedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody;
}


export class PostPortfolioOptimizationMarketCapitalizationWeightedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJsonObject?: PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
