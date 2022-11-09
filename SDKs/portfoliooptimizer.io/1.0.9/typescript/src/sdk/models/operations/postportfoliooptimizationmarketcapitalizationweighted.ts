import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsMarketCapitalizations" })
  assetsMarketCapitalizations: number[];
}


export class PostPortfolioOptimizationMarketCapitalizationWeightedRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody;
}


export class PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioOptimizationMarketCapitalizationWeightedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJsonObject?: PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJson;

  @Metadata()
  statusCode: number;
}
