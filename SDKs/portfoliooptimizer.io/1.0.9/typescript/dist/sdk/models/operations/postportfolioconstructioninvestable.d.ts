import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioConstructionInvestableRequestBody extends SpeakeasyBase {
    assets: number;
    assetsGroups?: number[][];
    assetsGroupsWeights?: number[];
    assetsMinimumNotionalValues?: number[];
    assetsMinimumPositions?: number[];
    assetsPrices: number[];
    assetsSizeLots?: number[];
    assetsWeights?: number[];
    maximumAssetsGroupsWeights?: number[];
    portfolioValue: number;
}
export declare class PostPortfolioConstructionInvestable200ApplicationJson extends SpeakeasyBase {
    assetsPositions: number[];
    assetsWeights: number[];
}
export declare class PostPortfolioConstructionInvestableRequest extends SpeakeasyBase {
    request: PostPortfolioConstructionInvestableRequestBody;
}
export declare class PostPortfolioConstructionInvestableResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioConstructionInvestable200ApplicationJsonObject?: PostPortfolioConstructionInvestable200ApplicationJson;
    statusCode: number;
}
