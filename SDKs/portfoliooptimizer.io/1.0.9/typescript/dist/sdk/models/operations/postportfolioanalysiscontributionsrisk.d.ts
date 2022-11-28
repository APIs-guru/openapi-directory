import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioAnalysisContributionsRiskRequestBody extends SpeakeasyBase {
    assets: number;
    assetsCovarianceMatrix: number[][];
    assetsGroups?: number[][];
    portfolios: PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios[];
}
export declare class PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios extends SpeakeasyBase {
    assetsGroupsRiskContributions?: number[];
    assetsRiskContributions: number[];
}
export declare class PostPortfolioAnalysisContributionsRisk200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioAnalysisContributionsRiskRequest extends SpeakeasyBase {
    request: PostPortfolioAnalysisContributionsRiskRequestBody;
}
export declare class PostPortfolioAnalysisContributionsRiskResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioAnalysisContributionsRisk200ApplicationJsonObject?: PostPortfolioAnalysisContributionsRisk200ApplicationJson;
    statusCode: number;
}
