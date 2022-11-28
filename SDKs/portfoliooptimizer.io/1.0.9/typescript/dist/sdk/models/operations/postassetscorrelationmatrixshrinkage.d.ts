import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum {
    MinimumEquicorrelationMatrix = "minimumEquicorrelationMatrix",
    ZeroEquicorrelationMatrix = "zeroEquicorrelationMatrix",
    MaximumEquicorrelationMatrix = "maximumEquicorrelationMatrix"
}
export declare class PostAssetsCorrelationMatrixShrinkageRequestBody1 extends SpeakeasyBase {
    assets: number;
    assetsCorrelationMatrix: number[][];
    shrinkageFactor: number;
    shrinkageTarget: PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum;
}
export declare class PostAssetsCorrelationMatrixShrinkageRequestBody2 extends SpeakeasyBase {
    assets: number;
    assetsCorrelationMatrix: number[][];
    shrinkageFactor: number;
    shrinkageTargetCorrelationMatrix: number[][];
}
export declare class PostAssetsCorrelationMatrixShrinkage200ApplicationJson extends SpeakeasyBase {
    assetsCorrelationMatrix: number[][];
}
export declare class PostAssetsCorrelationMatrixShrinkageRequest extends SpeakeasyBase {
    request: any;
}
export declare class PostAssetsCorrelationMatrixShrinkageResponse extends SpeakeasyBase {
    contentType: string;
    postAssetsCorrelationMatrixShrinkage200ApplicationJsonObject?: PostAssetsCorrelationMatrixShrinkage200ApplicationJson;
    statusCode: number;
}
