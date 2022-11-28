import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAssetsCorrelationMatrixValidationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];
}

export enum PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum {
    ValidCorrelationMatrix = "valid correlation matrix",
    InvalidCorrelationMatrixNonSymmetricMatrix = "invalid correlation matrix - non symmetric matrix",
    InvalidCorrelationMatrixNonPositiveDiagonalElements = "invalid correlation matrix - non positive diagonal elements",
    InvalidCorrelationMatrixNonPositiveSemiDefiniteMatrix = "invalid correlation matrix - non positive semi-definite matrix"
}


export class PostAssetsCorrelationMatrixValidation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum;
}


export class PostAssetsCorrelationMatrixValidationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAssetsCorrelationMatrixValidationRequestBody;
}


export class PostAssetsCorrelationMatrixValidationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAssetsCorrelationMatrixValidation200ApplicationJsonObject?: PostAssetsCorrelationMatrixValidation200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
