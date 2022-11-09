import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolioReturns" })
  portfolioReturns: number[];
}


export class PostPortfolioAnalysisTrackingErrorRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=benchmarkReturns" })
  benchmarkReturns: number[];

  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios })
  portfolios: PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios[];
}


export class PostPortfolioAnalysisTrackingErrorRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisTrackingErrorRequestBody;
}


export class PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolioTrackingError" })
  portfolioTrackingError: number;
}


export class PostPortfolioAnalysisTrackingError200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisTrackingErrorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioAnalysisTrackingError200ApplicationJsonObject?: PostPortfolioAnalysisTrackingError200ApplicationJson;

  @Metadata()
  statusCode: number;
}
