import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAssetsCovarianceMatrixSampleRequestBodyAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsCovarianceMatrixSampleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostAssetsCovarianceMatrixSampleRequestBodyAssets })
  assets: PostAssetsCovarianceMatrixSampleRequestBodyAssets[];
}


export class PostAssetsCovarianceMatrixSampleRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostAssetsCovarianceMatrixSampleRequestBody;
}


export class PostAssetsCovarianceMatrixSample200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];
}


export class PostAssetsCovarianceMatrixSampleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAssetsCovarianceMatrixSample200ApplicationJsonObject?: PostAssetsCovarianceMatrixSample200ApplicationJson;

  @Metadata()
  statusCode: number;
}
