import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolioValues" })
  portfolioValues: number[];
}


export class PostPortfolioAnalysisReturnsAverageRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios })
  portfolios: PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios[];
}


export class PostPortfolioAnalysisReturnsAverageRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisReturnsAverageRequestBody;
}


export class PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolioAverageReturn" })
  portfolioAverageReturn: number;
}


export class PostPortfolioAnalysisReturnsAverage200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisReturnsAverageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioAnalysisReturnsAverage200ApplicationJsonObject?: PostPortfolioAnalysisReturnsAverage200ApplicationJson;

  @Metadata()
  statusCode: number;
}
