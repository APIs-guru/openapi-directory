import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAssetsCovarianceMatrixSampleRequestBodyAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsCovarianceMatrixSampleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsCovarianceMatrixSampleRequestBodyAssets })
  assets: PostAssetsCovarianceMatrixSampleRequestBodyAssets[];
}


export class PostAssetsCovarianceMatrixSample200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];
}


export class PostAssetsCovarianceMatrixSampleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAssetsCovarianceMatrixSampleRequestBody;
}


export class PostAssetsCovarianceMatrixSampleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAssetsCovarianceMatrixSample200ApplicationJsonObject?: PostAssetsCovarianceMatrixSample200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
