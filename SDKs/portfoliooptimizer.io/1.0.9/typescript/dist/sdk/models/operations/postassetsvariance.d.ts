import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAssetsVarianceRequestBody1Assets extends SpeakeasyBase {
    assetReturns: number[];
}
export declare class PostAssetsVarianceRequestBody1 extends SpeakeasyBase {
    assets: PostAssetsVarianceRequestBody1Assets[];
}
export declare class PostAssetsVarianceRequestBody2 extends SpeakeasyBase {
    assets: number;
    assetsCovarianceMatrix: number[][];
}
export declare class PostAssetsVarianceRequestBody3Assets extends SpeakeasyBase {
    assetVolatility: number;
}
export declare class PostAssetsVarianceRequestBody3 extends SpeakeasyBase {
    assets: PostAssetsVarianceRequestBody3Assets[];
}
export declare class PostAssetsVariance200ApplicationJsonAssets extends SpeakeasyBase {
    assetVariance: number;
}
export declare class PostAssetsVariance200ApplicationJson extends SpeakeasyBase {
    assets: PostAssetsVariance200ApplicationJsonAssets[];
}
export declare class PostAssetsVarianceRequest extends SpeakeasyBase {
    request: any;
}
export declare class PostAssetsVarianceResponse extends SpeakeasyBase {
    contentType: string;
    postAssetsVariance200ApplicationJsonObject?: PostAssetsVariance200ApplicationJson;
    statusCode: number;
}
