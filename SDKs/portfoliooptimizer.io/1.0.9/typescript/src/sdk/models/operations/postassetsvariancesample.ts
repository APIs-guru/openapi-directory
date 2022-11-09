import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAssetsVarianceSampleRequestBodyAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsVarianceSampleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostAssetsVarianceSampleRequestBodyAssets })
  assets: PostAssetsVarianceSampleRequestBodyAssets[];
}


export class PostAssetsVarianceSampleRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostAssetsVarianceSampleRequestBody;
}


export class PostAssetsVarianceSample200ApplicationJsonAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetVariance" })
  assetVariance: number;
}


export class PostAssetsVarianceSample200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostAssetsVarianceSample200ApplicationJsonAssets })
  assets: PostAssetsVarianceSample200ApplicationJsonAssets[];
}


export class PostAssetsVarianceSampleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAssetsVarianceSample200ApplicationJsonObject?: PostAssetsVarianceSample200ApplicationJson;

  @Metadata()
  statusCode: number;
}
