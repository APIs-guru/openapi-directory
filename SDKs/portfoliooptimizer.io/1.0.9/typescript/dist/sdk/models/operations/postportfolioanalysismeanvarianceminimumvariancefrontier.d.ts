import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints extends SpeakeasyBase {
    assetsGroups?: number[][];
    assetsGroupsMatrix?: number[][];
    maximumAssetsGroupsWeights?: number[];
    maximumAssetsWeights?: number[];
    maximumPortfolioExposure?: number;
    minimumAssetsWeights?: number[];
    minimumPortfolioExposure?: number;
}
export declare class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody extends SpeakeasyBase {
    assets: number;
    assetsCovarianceMatrix: number[][];
    assetsReturns: number[];
    constraints?: PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints;
    portfolios?: number;
}
export declare class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios extends SpeakeasyBase {
    assetsWeights: number[];
    portfolioReturn: number;
    portfolioVolatility: number;
}
export declare class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest extends SpeakeasyBase {
    request: PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody;
}
export declare class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonObject?: PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJson;
    statusCode: number;
}
