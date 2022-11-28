import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioAnalysisDrawdownsRequestBodyPortfolios extends SpeakeasyBase {
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisDrawdownsRequestBody extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisDrawdownsRequestBodyPortfolios[];
}
export declare class PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns extends SpeakeasyBase {
    drawdownBottom: number;
    drawdownDepth: number;
    drawdownEnd: number;
    drawdownStart: number;
}
export declare class PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios extends SpeakeasyBase {
    portfolioDrawdowns: number[];
    portfolioWorstDrawdowns: PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns[];
}
export declare class PostPortfolioAnalysisDrawdowns200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioAnalysisDrawdownsRequest extends SpeakeasyBase {
    request: PostPortfolioAnalysisDrawdownsRequestBody;
}
export declare class PostPortfolioAnalysisDrawdownsResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioAnalysisDrawdowns200ApplicationJsonObject?: PostPortfolioAnalysisDrawdowns200ApplicationJson;
    statusCode: number;
}
