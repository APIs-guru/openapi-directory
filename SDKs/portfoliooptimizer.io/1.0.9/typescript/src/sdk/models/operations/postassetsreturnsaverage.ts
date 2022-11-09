import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAssetsReturnsAverageRequestBodyAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsReturnsAverageRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostAssetsReturnsAverageRequestBodyAssets })
  assets: PostAssetsReturnsAverageRequestBodyAssets[];
}


export class PostAssetsReturnsAverageRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostAssetsReturnsAverageRequestBody;
}


export class PostAssetsReturnsAverage200ApplicationJsonAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetAverageReturn" })
  assetAverageReturn: number;
}


export class PostAssetsReturnsAverage200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostAssetsReturnsAverage200ApplicationJsonAssets })
  assets: PostAssetsReturnsAverage200ApplicationJsonAssets[];
}


export class PostAssetsReturnsAverageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAssetsReturnsAverage200ApplicationJsonObject?: PostAssetsReturnsAverage200ApplicationJson;

  @Metadata()
  statusCode: number;
}
