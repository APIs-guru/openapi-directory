import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAssetsVolatilitySampleRequestBodyAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsVolatilitySampleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostAssetsVolatilitySampleRequestBodyAssets })
  assets: PostAssetsVolatilitySampleRequestBodyAssets[];
}


export class PostAssetsVolatilitySampleRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostAssetsVolatilitySampleRequestBody;
}


export class PostAssetsVolatilitySample200ApplicationJsonAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetVolatility" })
  assetVolatility: number;
}


export class PostAssetsVolatilitySample200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostAssetsVolatilitySample200ApplicationJsonAssets })
  assets: PostAssetsVolatilitySample200ApplicationJsonAssets[];
}


export class PostAssetsVolatilitySampleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAssetsVolatilitySample200ApplicationJsonObject?: PostAssetsVolatilitySample200ApplicationJson;

  @Metadata()
  statusCode: number;
}
