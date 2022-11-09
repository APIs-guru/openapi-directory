import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioAnalysisAlphaRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolioAlpha" })
  portfolioAlpha: number;
}


export class PostPortfolioAnalysisAlpha200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisAlphaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioAnalysisAlpha200ApplicationJsonObject?: PostPortfolioAnalysisAlpha200ApplicationJson;

  @Metadata()
  statusCode: number;
}
