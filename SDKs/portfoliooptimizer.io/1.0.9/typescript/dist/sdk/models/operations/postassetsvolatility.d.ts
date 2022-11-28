import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAssetsVolatilityRequestBody1Assets extends SpeakeasyBase {
    assetReturns: number[];
}
export declare class PostAssetsVolatilityRequestBody1 extends SpeakeasyBase {
    assets: PostAssetsVolatilityRequestBody1Assets[];
}
export declare class PostAssetsVolatilityRequestBody2 extends SpeakeasyBase {
    assets: number;
    assetsCovarianceMatrix: number[][];
}
export declare class PostAssetsVolatilityRequestBody3Assets extends SpeakeasyBase {
    assetVariance: number;
}
export declare class PostAssetsVolatilityRequestBody3 extends SpeakeasyBase {
    assets: PostAssetsVolatilityRequestBody3Assets[];
}
export declare class PostAssetsVolatility200ApplicationJsonAssets extends SpeakeasyBase {
    assetVolatility: number;
}
export declare class PostAssetsVolatility200ApplicationJson extends SpeakeasyBase {
    assets: PostAssetsVolatility200ApplicationJsonAssets[];
}
export declare class PostAssetsVolatilityRequest extends SpeakeasyBase {
    request: any;
}
export declare class PostAssetsVolatilityResponse extends SpeakeasyBase {
    contentType: string;
    postAssetsVolatility200ApplicationJsonObject?: PostAssetsVolatility200ApplicationJson;
    statusCode: number;
}
