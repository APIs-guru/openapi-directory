import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAssetsVarianceRequestBody1Assets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsVarianceRequestBody1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostAssetsVarianceRequestBody1Assets })
  assets: PostAssetsVarianceRequestBody1Assets[];
}


export class PostAssetsVarianceRequestBody2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];
}


export class PostAssetsVarianceRequestBody3Assets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetVolatility" })
  assetVolatility: number;
}


export class PostAssetsVarianceRequestBody3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostAssetsVarianceRequestBody3Assets })
  assets: PostAssetsVarianceRequestBody3Assets[];
}


export class PostAssetsVarianceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostAssetsVariance200ApplicationJsonAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetVariance" })
  assetVariance: number;
}


export class PostAssetsVariance200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostAssetsVariance200ApplicationJsonAssets })
  assets: PostAssetsVariance200ApplicationJsonAssets[];
}


export class PostAssetsVarianceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAssetsVariance200ApplicationJsonObject?: PostAssetsVariance200ApplicationJson;

  @Metadata()
  statusCode: number;
}
