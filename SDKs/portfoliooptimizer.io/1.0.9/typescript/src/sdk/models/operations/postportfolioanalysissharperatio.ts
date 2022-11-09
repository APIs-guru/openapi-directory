import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioAnalysisSharpeRatioRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolioSharpeRatio" })
  portfolioSharpeRatio: number;
}


export class PostPortfolioAnalysisSharpeRatio200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisSharpeRatioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioAnalysisSharpeRatio200ApplicationJsonObject?: PostPortfolioAnalysisSharpeRatio200ApplicationJson;

  @Metadata()
  statusCode: number;
}
