import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioAnalysisFactorExposuresRequestBodyFactors extends SpeakeasyBase {
  @Metadata({ data: "json, name=factorReturns" })
  factorReturns: number[];
}


export class PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolioReturns" })
  portfolioReturns: number[];
}


export class PostPortfolioAnalysisFactorExposuresRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=factors", elemType: operations.PostPortfolioAnalysisFactorExposuresRequestBodyFactors })
  factors?: PostPortfolioAnalysisFactorExposuresRequestBodyFactors[];

  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios })
  portfolios: PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios[];
}


export class PostPortfolioAnalysisFactorExposuresRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisFactorExposuresRequestBody;
}


export class PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolioAlpha" })
  portfolioAlpha: number;

  @Metadata({ data: "json, name=portfolioBetas" })
  portfolioBetas: number[];

  @Metadata({ data: "json, name=portfolioRSquared" })
  portfolioRSquared: number;
}


export class PostPortfolioAnalysisFactorExposures200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisFactorExposuresResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioAnalysisFactorExposures200ApplicationJsonObject?: PostPortfolioAnalysisFactorExposures200ApplicationJson;

  @Metadata()
  statusCode: number;
}
