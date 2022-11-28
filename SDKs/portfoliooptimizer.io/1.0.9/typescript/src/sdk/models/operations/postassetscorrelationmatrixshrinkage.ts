import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum {
    MinimumEquicorrelationMatrix = "minimumEquicorrelationMatrix",
    ZeroEquicorrelationMatrix = "zeroEquicorrelationMatrix",
    MaximumEquicorrelationMatrix = "maximumEquicorrelationMatrix"
}


export class PostAssetsCorrelationMatrixShrinkageRequestBody1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];

  @SpeakeasyMetadata({ data: "json, name=shrinkageFactor" })
  shrinkageFactor: number;

  @SpeakeasyMetadata({ data: "json, name=shrinkageTarget" })
  shrinkageTarget: PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum;
}


export class PostAssetsCorrelationMatrixShrinkageRequestBody2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];

  @SpeakeasyMetadata({ data: "json, name=shrinkageFactor" })
  shrinkageFactor: number;

  @SpeakeasyMetadata({ data: "json, name=shrinkageTargetCorrelationMatrix" })
  shrinkageTargetCorrelationMatrix: number[][];
}


export class PostAssetsCorrelationMatrixShrinkage200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];
}


export class PostAssetsCorrelationMatrixShrinkageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostAssetsCorrelationMatrixShrinkageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAssetsCorrelationMatrixShrinkage200ApplicationJsonObject?: PostAssetsCorrelationMatrixShrinkage200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
