import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioValues" })
  portfolioValues: number[];
}


export class PostPortfolioAnalysisReturnsAverageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios })
  portfolios: PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios[];
}


export class PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioAverageReturn" })
  portfolioAverageReturn: number;
}


export class PostPortfolioAnalysisReturnsAverage200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisReturnsAverageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisReturnsAverageRequestBody;
}


export class PostPortfolioAnalysisReturnsAverageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioAnalysisReturnsAverage200ApplicationJsonObject?: PostPortfolioAnalysisReturnsAverage200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
