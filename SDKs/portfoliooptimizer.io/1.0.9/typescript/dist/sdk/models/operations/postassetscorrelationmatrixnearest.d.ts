import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAssetsCorrelationMatrixNearestRequestBody extends SpeakeasyBase {
    assets: number;
    assetsApproximateCorrelationMatrix: number[][];
    assetsFixedCorrelations?: number[][];
}
export declare class PostAssetsCorrelationMatrixNearest200ApplicationJson extends SpeakeasyBase {
    assetsCorrelationMatrix: number[][];
}
export declare class PostAssetsCorrelationMatrixNearestRequest extends SpeakeasyBase {
    request: PostAssetsCorrelationMatrixNearestRequestBody;
}
export declare class PostAssetsCorrelationMatrixNearestResponse extends SpeakeasyBase {
    contentType: string;
    postAssetsCorrelationMatrixNearest200ApplicationJsonObject?: PostAssetsCorrelationMatrixNearest200ApplicationJson;
    statusCode: number;
}
