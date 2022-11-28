import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAssetsReturnsRequestBodyAssets extends SpeakeasyBase {
    assetPrices: number[];
}
export declare class PostAssetsReturnsRequestBody extends SpeakeasyBase {
    assets: PostAssetsReturnsRequestBodyAssets[];
}
export declare class PostAssetsReturns200ApplicationJsonAssets extends SpeakeasyBase {
    assetReturns: number[];
}
export declare class PostAssetsReturns200ApplicationJson extends SpeakeasyBase {
    assets: PostAssetsReturns200ApplicationJsonAssets[];
}
export declare class PostAssetsReturnsRequest extends SpeakeasyBase {
    request: PostAssetsReturnsRequestBody;
}
export declare class PostAssetsReturnsResponse extends SpeakeasyBase {
    contentType: string;
    postAssetsReturns200ApplicationJsonObject?: PostAssetsReturns200ApplicationJson;
    statusCode: number;
}
