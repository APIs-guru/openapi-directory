import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAssetsVolatilityRequestBody1Assets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsVolatilityRequestBody1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostAssetsVolatilityRequestBody1Assets })
  assets: PostAssetsVolatilityRequestBody1Assets[];
}


export class PostAssetsVolatilityRequestBody2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];
}


export class PostAssetsVolatilityRequestBody3Assets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetVariance" })
  assetVariance: number;
}


export class PostAssetsVolatilityRequestBody3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostAssetsVolatilityRequestBody3Assets })
  assets: PostAssetsVolatilityRequestBody3Assets[];
}


export class PostAssetsVolatilityRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostAssetsVolatility200ApplicationJsonAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetVolatility" })
  assetVolatility: number;
}


export class PostAssetsVolatility200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostAssetsVolatility200ApplicationJsonAssets })
  assets: PostAssetsVolatility200ApplicationJsonAssets[];
}


export class PostAssetsVolatilityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAssetsVolatility200ApplicationJsonObject?: PostAssetsVolatility200ApplicationJson;

  @Metadata()
  statusCode: number;
}
