import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioAnalysisDiversificationRatioRequestBody extends SpeakeasyBase {
    assets: number;
    assetsCovarianceMatrix: number[][];
    portfolios: PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios[];
}
export declare class PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios extends SpeakeasyBase {
    portfolioDiversificationRatio: number;
}
export declare class PostPortfolioAnalysisDiversificationRatio200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioAnalysisDiversificationRatioRequest extends SpeakeasyBase {
    request: PostPortfolioAnalysisDiversificationRatioRequestBody;
}
export declare class PostPortfolioAnalysisDiversificationRatioResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioAnalysisDiversificationRatio200ApplicationJsonObject?: PostPortfolioAnalysisDiversificationRatio200ApplicationJson;
    statusCode: number;
}
