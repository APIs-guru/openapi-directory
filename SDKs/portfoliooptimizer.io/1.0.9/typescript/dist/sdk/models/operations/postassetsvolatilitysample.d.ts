import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAssetsVolatilitySampleRequestBodyAssets extends SpeakeasyBase {
    assetReturns: number[];
}
export declare class PostAssetsVolatilitySampleRequestBody extends SpeakeasyBase {
    assets: PostAssetsVolatilitySampleRequestBodyAssets[];
}
export declare class PostAssetsVolatilitySample200ApplicationJsonAssets extends SpeakeasyBase {
    assetVolatility: number;
}
export declare class PostAssetsVolatilitySample200ApplicationJson extends SpeakeasyBase {
    assets: PostAssetsVolatilitySample200ApplicationJsonAssets[];
}
export declare class PostAssetsVolatilitySampleRequest extends SpeakeasyBase {
    request: PostAssetsVolatilitySampleRequestBody;
}
export declare class PostAssetsVolatilitySampleResponse extends SpeakeasyBase {
    contentType: string;
    postAssetsVolatilitySample200ApplicationJsonObject?: PostAssetsVolatilitySample200ApplicationJson;
    statusCode: number;
}
