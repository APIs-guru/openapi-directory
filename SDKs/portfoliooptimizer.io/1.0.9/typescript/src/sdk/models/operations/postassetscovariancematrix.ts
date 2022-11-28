import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAssetsCovarianceMatrixRequestBody1Assets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsCovarianceMatrixRequestBody1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsCovarianceMatrixRequestBody1Assets })
  assets: PostAssetsCovarianceMatrixRequestBody1Assets[];
}


export class PostAssetsCovarianceMatrixRequestBody2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];

  @SpeakeasyMetadata({ data: "json, name=assetsVariances" })
  assetsVariances: number[];
}


export class PostAssetsCovarianceMatrixRequestBody3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];

  @SpeakeasyMetadata({ data: "json, name=assetsVolatilities" })
  assetsVolatilities: number[];
}


export class PostAssetsCovarianceMatrix200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];
}


export class PostAssetsCovarianceMatrixRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostAssetsCovarianceMatrixResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAssetsCovarianceMatrix200ApplicationJsonObject?: PostAssetsCovarianceMatrix200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
