import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAssetsVarianceRequestBody1Assets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsVarianceRequestBody1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVarianceRequestBody1Assets })
  assets: PostAssetsVarianceRequestBody1Assets[];
}


export class PostAssetsVarianceRequestBody2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];
}


export class PostAssetsVarianceRequestBody3Assets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetVolatility" })
  assetVolatility: number;
}


export class PostAssetsVarianceRequestBody3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVarianceRequestBody3Assets })
  assets: PostAssetsVarianceRequestBody3Assets[];
}


export class PostAssetsVariance200ApplicationJsonAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetVariance" })
  assetVariance: number;
}


export class PostAssetsVariance200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsVariance200ApplicationJsonAssets })
  assets: PostAssetsVariance200ApplicationJsonAssets[];
}


export class PostAssetsVarianceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostAssetsVarianceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAssetsVariance200ApplicationJsonObject?: PostAssetsVariance200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
