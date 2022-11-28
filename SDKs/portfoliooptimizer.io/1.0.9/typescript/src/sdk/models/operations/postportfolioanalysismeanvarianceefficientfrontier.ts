import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsGroups" })
  assetsGroups?: number[][];

  @SpeakeasyMetadata({ data: "json, name=assetsGroupsMatrix" })
  assetsGroupsMatrix?: number[][];

  @SpeakeasyMetadata({ data: "json, name=maximumAssetsGroupsWeights" })
  maximumAssetsGroupsWeights?: number[];

  @SpeakeasyMetadata({ data: "json, name=maximumAssetsWeights" })
  maximumAssetsWeights?: number[];

  @SpeakeasyMetadata({ data: "json, name=maximumPortfolioExposure" })
  maximumPortfolioExposure?: number;

  @SpeakeasyMetadata({ data: "json, name=minimumAssetsWeights" })
  minimumAssetsWeights?: number[];

  @SpeakeasyMetadata({ data: "json, name=minimumPortfolioExposure" })
  minimumPortfolioExposure?: number;
}


export class PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];

  @SpeakeasyMetadata({ data: "json, name=assetsReturns" })
  assetsReturns: number[];

  @SpeakeasyMetadata({ data: "json, name=constraints" })
  constraints?: PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints;

  @SpeakeasyMetadata({ data: "json, name=portfolios" })
  portfolios?: number;
}


export class PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];

  @SpeakeasyMetadata({ data: "json, name=portfolioReturn" })
  portfolioReturn: number;

  @SpeakeasyMetadata({ data: "json, name=portfolioVolatility" })
  portfolioVolatility: number;
}


export class PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody;
}


export class PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonObject?: PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
