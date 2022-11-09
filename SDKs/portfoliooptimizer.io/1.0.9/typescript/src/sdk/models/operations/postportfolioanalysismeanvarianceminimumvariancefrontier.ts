import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsGroups" })
  assetsGroups?: number[][];

  @Metadata({ data: "json, name=assetsGroupsMatrix" })
  assetsGroupsMatrix?: number[][];

  @Metadata({ data: "json, name=maximumAssetsGroupsWeights" })
  maximumAssetsGroupsWeights?: number[];

  @Metadata({ data: "json, name=maximumAssetsWeights" })
  maximumAssetsWeights?: number[];

  @Metadata({ data: "json, name=maximumPortfolioExposure" })
  maximumPortfolioExposure?: number;

  @Metadata({ data: "json, name=minimumAssetsWeights" })
  minimumAssetsWeights?: number[];

  @Metadata({ data: "json, name=minimumPortfolioExposure" })
  minimumPortfolioExposure?: number;
}


export class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];

  @Metadata({ data: "json, name=assetsReturns" })
  assetsReturns: number[];

  @Metadata({ data: "json, name=constraints" })
  constraints?: PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints;

  @Metadata({ data: "json, name=portfolios" })
  portfolios?: number;
}


export class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody;
}


export class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];

  @Metadata({ data: "json, name=portfolioReturn" })
  portfolioReturn: number;

  @Metadata({ data: "json, name=portfolioVolatility" })
  portfolioVolatility: number;
}


export class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonObject?: PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJson;

  @Metadata()
  statusCode: number;
}
