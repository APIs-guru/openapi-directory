import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioReturns" })
  portfolioReturns: number[];
}


export class PostPortfolioAnalysisTrackingErrorRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=benchmarkReturns" })
  benchmarkReturns: number[];

  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios })
  portfolios: PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios[];
}


export class PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioTrackingError" })
  portfolioTrackingError: number;
}


export class PostPortfolioAnalysisTrackingError200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisTrackingErrorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisTrackingErrorRequestBody;
}


export class PostPortfolioAnalysisTrackingErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioAnalysisTrackingError200ApplicationJsonObject?: PostPortfolioAnalysisTrackingError200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
