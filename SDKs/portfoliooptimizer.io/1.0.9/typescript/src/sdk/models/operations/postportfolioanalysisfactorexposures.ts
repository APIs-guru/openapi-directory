import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioAnalysisFactorExposuresRequestBodyFactors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=factorReturns" })
  factorReturns: number[];
}


export class PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioReturns" })
  portfolioReturns: number[];
}


export class PostPortfolioAnalysisFactorExposuresRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=factors", elemType: PostPortfolioAnalysisFactorExposuresRequestBodyFactors })
  factors?: PostPortfolioAnalysisFactorExposuresRequestBodyFactors[];

  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios })
  portfolios: PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios[];
}


export class PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioAlpha" })
  portfolioAlpha: number;

  @SpeakeasyMetadata({ data: "json, name=portfolioBetas" })
  portfolioBetas: number[];

  @SpeakeasyMetadata({ data: "json, name=portfolioRSquared" })
  portfolioRSquared: number;
}


export class PostPortfolioAnalysisFactorExposures200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisFactorExposuresRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisFactorExposuresRequestBody;
}


export class PostPortfolioAnalysisFactorExposuresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioAnalysisFactorExposures200ApplicationJsonObject?: PostPortfolioAnalysisFactorExposures200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
