import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioConstructionMimickingRequestBodyAssets extends SpeakeasyBase {
    assetReturns: number[];
}
export declare class PostPortfolioConstructionMimickingRequestBodyConstraints extends SpeakeasyBase {
    assetsGroups?: number[][];
    assetsGroupsMatrix?: number[][];
    maximumAssetsGroupsWeights?: number[];
    maximumAssetsWeights?: number[];
    maximumPortfolioExposure?: number;
    minimumAssetsWeights?: number[];
    minimumPortfolioExposure?: number;
}
export declare class PostPortfolioConstructionMimickingRequestBody extends SpeakeasyBase {
    assets: PostPortfolioConstructionMimickingRequestBodyAssets[];
    benchmarkReturns: number[];
    constraints?: PostPortfolioConstructionMimickingRequestBodyConstraints;
}
export declare class PostPortfolioConstructionMimicking200ApplicationJson extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioConstructionMimickingRequest extends SpeakeasyBase {
    request: PostPortfolioConstructionMimickingRequestBody;
}
export declare class PostPortfolioConstructionMimickingResponse extends SpeakeasyBase {
    contentType: string;
    postPortfolioConstructionMimicking200ApplicationJsonObject?: PostPortfolioConstructionMimicking200ApplicationJson;
    statusCode: number;
}
