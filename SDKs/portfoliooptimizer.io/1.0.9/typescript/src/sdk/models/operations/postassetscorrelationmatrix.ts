import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAssetsCorrelationMatrixRequestBody1Assets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsCorrelationMatrixRequestBody1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: PostAssetsCorrelationMatrixRequestBody1Assets })
  assets: PostAssetsCorrelationMatrixRequestBody1Assets[];
}


export class PostAssetsCorrelationMatrixRequestBody2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];
}


export class PostAssetsCorrelationMatrix200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];
}


export class PostAssetsCorrelationMatrixRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostAssetsCorrelationMatrixResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAssetsCorrelationMatrix200ApplicationJsonObject?: PostAssetsCorrelationMatrix200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
