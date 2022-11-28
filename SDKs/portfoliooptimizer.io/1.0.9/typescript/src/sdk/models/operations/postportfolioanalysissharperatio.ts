import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioSharpeRatio" })
  portfolioSharpeRatio: number;
}


export class PostPortfolioAnalysisSharpeRatio200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisSharpeRatioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostPortfolioAnalysisSharpeRatioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioAnalysisSharpeRatio200ApplicationJsonObject?: PostPortfolioAnalysisSharpeRatio200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
