import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints extends SpeakeasyBase {
    assetsGroups?: number[][];
    assetsGroupsMatrix?: number[][];
    maximumAssetsGroupsWeights?: number[];
    maximumAssetsWeights?: number[];
    maximumPortfolioExposure?: number;
    minimumAssetsWeights?: number[];
    minimumPortfolioExposure?: number;
}
export declare class PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody extends SpeakeasyBase {
    assets: number;
    assetsCovarianceMatrix: number[][];
    assetsReturns: number[];
    constraints?: PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints;
    portfolios?: number;
}
export declare class PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios extends SpeakeasyBase {
    assetsWeights: number[];
    portfolioReturn: number;
    portfolioVolatility: number;
}
export declare class PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest extends SpeakeasyBase {
    request: PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody;
}
export declare class PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonObject?: PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJson;
    statusCode: number;
}
