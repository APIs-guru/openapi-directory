import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioAlpha" })
  portfolioAlpha: number;
}


export class PostPortfolioAnalysisAlpha200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisAlphaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostPortfolioAnalysisAlphaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioAnalysisAlpha200ApplicationJsonObject?: PostPortfolioAnalysisAlpha200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
