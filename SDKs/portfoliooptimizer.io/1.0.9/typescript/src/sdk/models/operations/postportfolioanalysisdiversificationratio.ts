import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];
}


export class PostPortfolioAnalysisDiversificationRatioRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];

  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios })
  portfolios: PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios[];
}


export class PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioDiversificationRatio" })
  portfolioDiversificationRatio: number;
}


export class PostPortfolioAnalysisDiversificationRatio200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisDiversificationRatioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisDiversificationRatioRequestBody;
}


export class PostPortfolioAnalysisDiversificationRatioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioAnalysisDiversificationRatio200ApplicationJsonObject?: PostPortfolioAnalysisDiversificationRatio200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
