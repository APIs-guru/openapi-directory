import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioAnalysisVolatilityRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolioVolatility" })
  portfolioVolatility: number;
}


export class PostPortfolioAnalysisVolatility200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisVolatilityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioAnalysisVolatility200ApplicationJsonObject?: PostPortfolioAnalysisVolatility200ApplicationJson;

  @Metadata()
  statusCode: number;
}
