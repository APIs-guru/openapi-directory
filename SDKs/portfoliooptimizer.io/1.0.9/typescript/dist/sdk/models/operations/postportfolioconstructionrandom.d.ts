import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioConstructionRandomRequestBodyConstraints extends SpeakeasyBase {
    maximumAssetsWeights?: number[];
    maximumPortfolioExposure?: number;
    minimumAssetsWeights?: number[];
    minimumPortfolioExposure?: number;
}
export declare class PostPortfolioConstructionRandomRequestBody extends SpeakeasyBase {
    assets: number;
    constraints?: PostPortfolioConstructionRandomRequestBodyConstraints;
    portfolios?: number;
}
export declare class PostPortfolioConstructionRandom200ApplicationJsonPortfolios extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioConstructionRandom200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioConstructionRandom200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioConstructionRandomRequest extends SpeakeasyBase {
    request: PostPortfolioConstructionRandomRequestBody;
}
export declare class PostPortfolioConstructionRandomResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioConstructionRandom200ApplicationJsonObject?: PostPortfolioConstructionRandom200ApplicationJson;
    statusCode: number;
}
