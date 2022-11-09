import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioAnalysisDrawdownsRequestBodyPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolioValues" })
  portfolioValues: number[];
}


export class PostPortfolioAnalysisDrawdownsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisDrawdownsRequestBodyPortfolios })
  portfolios: PostPortfolioAnalysisDrawdownsRequestBodyPortfolios[];
}


export class PostPortfolioAnalysisDrawdownsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisDrawdownsRequestBody;
}


export class PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns extends SpeakeasyBase {
  @Metadata({ data: "json, name=drawdownBottom" })
  drawdownBottom: number;

  @Metadata({ data: "json, name=drawdownDepth" })
  drawdownDepth: number;

  @Metadata({ data: "json, name=drawdownEnd" })
  drawdownEnd: number;

  @Metadata({ data: "json, name=drawdownStart" })
  drawdownStart: number;
}


export class PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolioDrawdowns" })
  portfolioDrawdowns: number[];

  @Metadata({ data: "json, name=portfolioWorstDrawdowns", elemType: operations.PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns })
  portfolioWorstDrawdowns: PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns[];
}


export class PostPortfolioAnalysisDrawdowns200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisDrawdownsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioAnalysisDrawdowns200ApplicationJsonObject?: PostPortfolioAnalysisDrawdowns200ApplicationJson;

  @Metadata()
  statusCode: number;
}
