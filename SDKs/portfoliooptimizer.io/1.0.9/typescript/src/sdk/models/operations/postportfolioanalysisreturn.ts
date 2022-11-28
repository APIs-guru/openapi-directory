import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioAnalysisReturn200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioReturn" })
  portfolioReturn: number;
}


export class PostPortfolioAnalysisReturn200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisReturn200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisReturn200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisReturnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostPortfolioAnalysisReturnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioAnalysisReturn200ApplicationJsonObject?: PostPortfolioAnalysisReturn200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
