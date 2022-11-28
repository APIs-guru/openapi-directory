import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAssetsVolatilitySampleRequestBodyAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsVolatilitySampleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVolatilitySampleRequestBodyAssets })
  assets: PostAssetsVolatilitySampleRequestBodyAssets[];
}


export class PostAssetsVolatilitySample200ApplicationJsonAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetVolatility" })
  assetVolatility: number;
}


export class PostAssetsVolatilitySample200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVolatilitySample200ApplicationJsonAssets })
  assets: PostAssetsVolatilitySample200ApplicationJsonAssets[];
}


export class PostAssetsVolatilitySampleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAssetsVolatilitySampleRequestBody;
}


export class PostAssetsVolatilitySampleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAssetsVolatilitySample200ApplicationJsonObject?: PostAssetsVolatilitySample200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
