import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAssetsReturnsAverageRequestBodyAssets extends SpeakeasyBase {
    assetReturns: number[];
}
export declare class PostAssetsReturnsAverageRequestBody extends SpeakeasyBase {
    assets: PostAssetsReturnsAverageRequestBodyAssets[];
}
export declare class PostAssetsReturnsAverage200ApplicationJsonAssets extends SpeakeasyBase {
    assetAverageReturn: number;
}
export declare class PostAssetsReturnsAverage200ApplicationJson extends SpeakeasyBase {
    assets: PostAssetsReturnsAverage200ApplicationJsonAssets[];
}
export declare class PostAssetsReturnsAverageRequest extends SpeakeasyBase {
    request: PostAssetsReturnsAverageRequestBody;
}
export declare class PostAssetsReturnsAverageResponse extends SpeakeasyBase {
    contentType: string;
    postAssetsReturnsAverage200ApplicationJsonObject?: PostAssetsReturnsAverage200ApplicationJson;
    statusCode: number;
}
