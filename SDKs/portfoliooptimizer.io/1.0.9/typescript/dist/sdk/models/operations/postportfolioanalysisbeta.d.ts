import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioAnalysisBeta200ApplicationJsonPortfolios extends SpeakeasyBase {
    portfolioBeta: number;
}
export declare class PostPortfolioAnalysisBeta200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisBeta200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioAnalysisBetaRequest extends SpeakeasyBase {
    request: Map<string, any>;
}
export declare class PostPortfolioAnalysisBetaResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioAnalysisBeta200ApplicationJsonObject?: PostPortfolioAnalysisBeta200ApplicationJson;
    statusCode: number;
}
