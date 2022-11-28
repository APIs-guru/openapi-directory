import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioAnalysisReturn200ApplicationJsonPortfolios extends SpeakeasyBase {
    portfolioReturn: number;
}
export declare class PostPortfolioAnalysisReturn200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisReturn200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioAnalysisReturnRequest extends SpeakeasyBase {
    request: Map<string, any>;
}
export declare class PostPortfolioAnalysisReturnResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioAnalysisReturn200ApplicationJsonObject?: PostPortfolioAnalysisReturn200ApplicationJson;
    statusCode: number;
}
