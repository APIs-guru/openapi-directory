import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints extends SpeakeasyBase {
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


export class PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];

  @Metadata({ data: "json, name=assetsReturns" })
  assetsReturns: number[];

  @Metadata({ data: "json, name=constraints" })
  constraints?: PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints;

  @Metadata({ data: "json, name=portfolios" })
  portfolios?: number;
}


export class PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody;
}


export class PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsWeights" })
  assetsWeights: number[];

  @Metadata({ data: "json, name=portfolioReturn" })
  portfolioReturn: number;

  @Metadata({ data: "json, name=portfolioVolatility" })
  portfolioVolatility: number;
}


export class PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=portfolios", elemType: operations.PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonObject?: PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJson;

  @Metadata()
  statusCode: number;
}
