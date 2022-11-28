import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAssetsCovarianceMatrixRequestBody1Assets extends SpeakeasyBase {
    assetReturns: number[];
}
export declare class PostAssetsCovarianceMatrixRequestBody1 extends SpeakeasyBase {
    assets: PostAssetsCovarianceMatrixRequestBody1Assets[];
}
export declare class PostAssetsCovarianceMatrixRequestBody2 extends SpeakeasyBase {
    assets: number;
    assetsCorrelationMatrix: number[][];
    assetsVariances: number[];
}
export declare class PostAssetsCovarianceMatrixRequestBody3 extends SpeakeasyBase {
    assets: number;
    assetsCorrelationMatrix: number[][];
    assetsVolatilities: number[];
}
export declare class PostAssetsCovarianceMatrix200ApplicationJson extends SpeakeasyBase {
    assetsCovarianceMatrix: number[][];
}
export declare class PostAssetsCovarianceMatrixRequest extends SpeakeasyBase {
    request: any;
}
export declare class PostAssetsCovarianceMatrixResponse extends SpeakeasyBase {
    contentType: string;
    postAssetsCovarianceMatrix200ApplicationJsonObject?: PostAssetsCovarianceMatrix200ApplicationJson;
    statusCode: number;
}
