import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAssetsCorrelationMatrixRequestBody1Assets extends SpeakeasyBase {
    assetReturns: number[];
}
export declare class PostAssetsCorrelationMatrixRequestBody1 extends SpeakeasyBase {
    assets: PostAssetsCorrelationMatrixRequestBody1Assets[];
}
export declare class PostAssetsCorrelationMatrixRequestBody2 extends SpeakeasyBase {
    assets: number;
    assetsCovarianceMatrix: number[][];
}
export declare class PostAssetsCorrelationMatrix200ApplicationJson extends SpeakeasyBase {
    assetsCorrelationMatrix: number[][];
}
export declare class PostAssetsCorrelationMatrixRequest extends SpeakeasyBase {
    request: any;
}
export declare class PostAssetsCorrelationMatrixResponse extends SpeakeasyBase {
    contentType: string;
    postAssetsCorrelationMatrix200ApplicationJsonObject?: PostAssetsCorrelationMatrix200ApplicationJson;
    statusCode: number;
}
