import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAssetsReturnsRequestBodyAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetPrices" })
  assetPrices: number[];
}


export class PostAssetsReturnsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsReturnsRequestBodyAssets })
  assets: PostAssetsReturnsRequestBodyAssets[];
}


export class PostAssetsReturns200ApplicationJsonAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsReturns200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsReturns200ApplicationJsonAssets })
  assets: PostAssetsReturns200ApplicationJsonAssets[];
}


export class PostAssetsReturnsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAssetsReturnsRequestBody;
}


export class PostAssetsReturnsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAssetsReturns200ApplicationJsonObject?: PostAssetsReturns200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
