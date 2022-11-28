import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAssetsCorrelationMatrixNearestRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsApproximateCorrelationMatrix" })
  assetsApproximateCorrelationMatrix: number[][];

  @SpeakeasyMetadata({ data: "json, name=assetsFixedCorrelations" })
  assetsFixedCorrelations?: number[][];
}


export class PostAssetsCorrelationMatrixNearest200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];
}


export class PostAssetsCorrelationMatrixNearestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAssetsCorrelationMatrixNearestRequestBody;
}


export class PostAssetsCorrelationMatrixNearestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAssetsCorrelationMatrixNearest200ApplicationJsonObject?: PostAssetsCorrelationMatrixNearest200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
