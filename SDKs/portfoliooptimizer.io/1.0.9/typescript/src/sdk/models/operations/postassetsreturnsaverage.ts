import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAssetsReturnsAverageRequestBodyAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsReturnsAverageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsReturnsAverageRequestBodyAssets })
  assets: PostAssetsReturnsAverageRequestBodyAssets[];
}


export class PostAssetsReturnsAverage200ApplicationJsonAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetAverageReturn" })
  assetAverageReturn: number;
}


export class PostAssetsReturnsAverage200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsReturnsAverage200ApplicationJsonAssets })
  assets: PostAssetsReturnsAverage200ApplicationJsonAssets[];
}


export class PostAssetsReturnsAverageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAssetsReturnsAverageRequestBody;
}


export class PostAssetsReturnsAverageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAssetsReturnsAverage200ApplicationJsonObject?: PostAssetsReturnsAverage200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
