import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAssetsCorrelationMatrixNearestRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsApproximateCorrelationMatrix" })
  assetsApproximateCorrelationMatrix: number[][];

  @Metadata({ data: "json, name=assetsFixedCorrelations" })
  assetsFixedCorrelations?: number[][];
}


export class PostAssetsCorrelationMatrixNearestRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostAssetsCorrelationMatrixNearestRequestBody;
}


export class PostAssetsCorrelationMatrixNearest200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];
}


export class PostAssetsCorrelationMatrixNearestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAssetsCorrelationMatrixNearest200ApplicationJsonObject?: PostAssetsCorrelationMatrixNearest200ApplicationJson;

  @Metadata()
  statusCode: number;
}
