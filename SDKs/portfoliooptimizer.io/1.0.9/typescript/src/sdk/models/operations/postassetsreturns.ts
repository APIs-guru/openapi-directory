import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAssetsReturnsRequestBodyAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetPrices" })
  assetPrices: number[];
}


export class PostAssetsReturnsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostAssetsReturnsRequestBodyAssets })
  assets: PostAssetsReturnsRequestBodyAssets[];
}


export class PostAssetsReturnsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostAssetsReturnsRequestBody;
}


export class PostAssetsReturns200ApplicationJsonAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsReturns200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostAssetsReturns200ApplicationJsonAssets })
  assets: PostAssetsReturns200ApplicationJsonAssets[];
}


export class PostAssetsReturnsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAssetsReturns200ApplicationJsonObject?: PostAssetsReturns200ApplicationJson;

  @Metadata()
  statusCode: number;
}
