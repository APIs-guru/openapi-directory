import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAssetsVolatilityRequestBody1Assets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsVolatilityRequestBody1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVolatilityRequestBody1Assets })
  assets: PostAssetsVolatilityRequestBody1Assets[];
}


export class PostAssetsVolatilityRequestBody2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];
}


export class PostAssetsVolatilityRequestBody3Assets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetVariance" })
  assetVariance: number;
}


export class PostAssetsVolatilityRequestBody3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVolatilityRequestBody3Assets })
  assets: PostAssetsVolatilityRequestBody3Assets[];
}


export class PostAssetsVolatility200ApplicationJsonAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetVolatility" })
  assetVolatility: number;
}


export class PostAssetsVolatility200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVolatility200ApplicationJsonAssets })
  assets: PostAssetsVolatility200ApplicationJsonAssets[];
}


export class PostAssetsVolatilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostAssetsVolatilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAssetsVolatility200ApplicationJsonObject?: PostAssetsVolatility200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
