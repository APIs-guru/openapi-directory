import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAssetsCovarianceMatrixValidationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets: number;

  @SpeakeasyMetadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];
}

export enum PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum {
    ValidCovarianceMatrix = "valid covariance matrix",
    InvalidCovarianceMatrixNonSymmetricMatrix = "invalid covariance matrix - non symmetric matrix",
    InvalidCovarianceMatrixNonPositiveDiagonalElements = "invalid covariance matrix - non positive diagonal elements",
    InvalidCovarianceMatrixNonPositiveSemiDefiniteMatrix = "invalid covariance matrix - non positive semi-definite matrix"
}


export class PostAssetsCovarianceMatrixValidation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum;
}


export class PostAssetsCovarianceMatrixValidationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAssetsCovarianceMatrixValidationRequestBody;
}


export class PostAssetsCovarianceMatrixValidationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAssetsCovarianceMatrixValidation200ApplicationJsonObject?: PostAssetsCovarianceMatrixValidation200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
