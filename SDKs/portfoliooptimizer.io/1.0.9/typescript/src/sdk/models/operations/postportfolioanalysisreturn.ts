import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioAnalysisReturnRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostPortfolioAnalysisReturn200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolioReturn" })
  portfolioReturn: number;
}


export class PostPortfolioAnalysisReturn200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisReturn200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisReturn200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisReturnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioAnalysisReturn200ApplicationJsonObject?: PostPortfolioAnalysisReturn200ApplicationJson;

  @Metadata()
  statusCode: number;
}
