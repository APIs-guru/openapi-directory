import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum {
    MinimumEquicorrelationMatrix = "minimumEquicorrelationMatrix"
,    ZeroEquicorrelationMatrix = "zeroEquicorrelationMatrix"
,    MaximumEquicorrelationMatrix = "maximumEquicorrelationMatrix"
}


export class PostAssetsCorrelationMatrixShrinkageRequestBody1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];

  @Metadata({ data: "json, name=shrinkageFactor" })
  shrinkageFactor: number;

  @Metadata({ data: "json, name=shrinkageTarget" })
  shrinkageTarget: PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum;
}


export class PostAssetsCorrelationMatrixShrinkageRequestBody2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];

  @Metadata({ data: "json, name=shrinkageFactor" })
  shrinkageFactor: number;

  @Metadata({ data: "json, name=shrinkageTargetCorrelationMatrix" })
  shrinkageTargetCorrelationMatrix: number[][];
}


export class PostAssetsCorrelationMatrixShrinkageRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostAssetsCorrelationMatrixShrinkage200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];
}


export class PostAssetsCorrelationMatrixShrinkageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAssetsCorrelationMatrixShrinkage200ApplicationJsonObject?: PostAssetsCorrelationMatrixShrinkage200ApplicationJson;

  @Metadata()
  statusCode: number;
}
