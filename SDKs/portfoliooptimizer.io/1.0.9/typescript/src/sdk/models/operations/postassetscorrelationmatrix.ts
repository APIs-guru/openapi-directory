import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAssetsCorrelationMatrixRequestBody1Assets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetReturns" })
  assetReturns: number[];
}


export class PostAssetsCorrelationMatrixRequestBody1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: operations.PostAssetsCorrelationMatrixRequestBody1Assets })
  assets: PostAssetsCorrelationMatrixRequestBody1Assets[];
}


export class PostAssetsCorrelationMatrixRequestBody2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];
}


export class PostAssetsCorrelationMatrixRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostAssetsCorrelationMatrix200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];
}


export class PostAssetsCorrelationMatrixResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAssetsCorrelationMatrix200ApplicationJsonObject?: PostAssetsCorrelationMatrix200ApplicationJson;

  @Metadata()
  statusCode: number;
}
