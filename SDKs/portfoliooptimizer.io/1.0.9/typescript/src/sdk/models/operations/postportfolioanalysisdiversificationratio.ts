import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioAnalysisDiversificationRatioRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];

  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios })
  portfolios: PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios[];
}


export class PostPortfolioAnalysisDiversificationRatioRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisDiversificationRatioRequestBody;
}


export class PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolioDiversificationRatio" })
  portfolioDiversificationRatio: number;
}


export class PostPortfolioAnalysisDiversificationRatio200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisDiversificationRatioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioAnalysisDiversificationRatio200ApplicationJsonObject?: PostPortfolioAnalysisDiversificationRatio200ApplicationJson;

  @Metadata()
  statusCode: number;
}
