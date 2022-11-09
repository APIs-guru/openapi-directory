import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioAnalysisBetaRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class PostPortfolioAnalysisBeta200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolioBeta" })
  portfolioBeta: number;
}


export class PostPortfolioAnalysisBeta200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisBeta200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisBeta200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisBetaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioAnalysisBeta200ApplicationJsonObject?: PostPortfolioAnalysisBeta200ApplicationJson;

  @Metadata()
  statusCode: number;
}
