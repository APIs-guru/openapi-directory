import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioAnalysisDrawdownsRequestBodyPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioValues" })
  portfolioValues: number[];
}


export class PostPortfolioAnalysisDrawdownsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisDrawdownsRequestBodyPortfolios })
  portfolios: PostPortfolioAnalysisDrawdownsRequestBodyPortfolios[];
}


export class PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=drawdownBottom" })
  drawdownBottom: number;

  @SpeakeasyMetadata({ data: "json, name=drawdownDepth" })
  drawdownDepth: number;

  @SpeakeasyMetadata({ data: "json, name=drawdownEnd" })
  drawdownEnd: number;

  @SpeakeasyMetadata({ data: "json, name=drawdownStart" })
  drawdownStart: number;
}


export class PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioDrawdowns" })
  portfolioDrawdowns: number[];

  @SpeakeasyMetadata({ data: "json, name=portfolioWorstDrawdowns", elemType: PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns })
  portfolioWorstDrawdowns: PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns[];
}


export class PostPortfolioAnalysisDrawdowns200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisDrawdownsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisDrawdownsRequestBody;
}


export class PostPortfolioAnalysisDrawdownsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioAnalysisDrawdowns200ApplicationJsonObject?: PostPortfolioAnalysisDrawdowns200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
