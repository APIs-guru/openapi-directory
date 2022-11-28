import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints extends SpeakeasyBase {
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


export class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];

  @SpeakeasyMetadata({ data: "json, name=assetsReturns" })
  assetsReturns: number[];

  @SpeakeasyMetadata({ data: "json, name=constraints" })
  constraints?: PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints;

  @SpeakeasyMetadata({ data: "json, name=portfolios" })
  portfolios?: number;
}


export class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];

  @SpeakeasyMetadata({ data: "json, name=portfolioReturn" })
  portfolioReturn: number;

  @SpeakeasyMetadata({ data: "json, name=portfolioVolatility" })
  portfolioVolatility: number;
}


export class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody;
}


export class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonObject?: PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
