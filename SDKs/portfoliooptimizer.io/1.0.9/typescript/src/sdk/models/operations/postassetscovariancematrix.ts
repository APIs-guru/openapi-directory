import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAssetsCovarianceMatrixRequestBody1Assets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsCovarianceMatrixRequestBody1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostAssetsCovarianceMatrixRequestBody1Assets })
  assets: PostAssetsCovarianceMatrixRequestBody1Assets[];
}


export class PostAssetsCovarianceMatrixRequestBody2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];

  @Metadata({ data: "json, name=assetsVariances" })
  assetsVariances: number[];
}


export class PostAssetsCovarianceMatrixRequestBody3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];

  @Metadata({ data: "json, name=assetsVolatilities" })
  assetsVolatilities: number[];
}


export class PostAssetsCovarianceMatrixRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostAssetsCovarianceMatrix200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];
}


export class PostAssetsCovarianceMatrixResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAssetsCovarianceMatrix200ApplicationJsonObject?: PostAssetsCovarianceMatrix200ApplicationJson;

  @Metadata()
  statusCode: number;
}
