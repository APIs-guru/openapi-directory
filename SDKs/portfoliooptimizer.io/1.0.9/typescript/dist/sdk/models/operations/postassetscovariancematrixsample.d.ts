import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAssetsCovarianceMatrixSampleRequestBodyAssets extends SpeakeasyBase {
    assetReturns: number[];
}
export declare class PostAssetsCovarianceMatrixSampleRequestBody extends SpeakeasyBase {
    assets: PostAssetsCovarianceMatrixSampleRequestBodyAssets[];
}
export declare class PostAssetsCovarianceMatrixSample200ApplicationJson extends SpeakeasyBase {
    assetsCovarianceMatrix: number[][];
}
export declare class PostAssetsCovarianceMatrixSampleRequest extends SpeakeasyBase {
    request: PostAssetsCovarianceMatrixSampleRequestBody;
}
export declare class PostAssetsCovarianceMatrixSampleResponse extends SpeakeasyBase {
    contentType: string;
    postAssetsCovarianceMatrixSample200ApplicationJsonObject?: PostAssetsCovarianceMatrixSample200ApplicationJson;
    statusCode: number;
}
