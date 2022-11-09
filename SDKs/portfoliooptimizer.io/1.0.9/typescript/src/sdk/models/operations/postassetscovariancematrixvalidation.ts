import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAssetsCovarianceMatrixValidationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCovarianceMatrix" })
  assetsCovarianceMatrix: number[][];
}


export class PostAssetsCovarianceMatrixValidationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostAssetsCovarianceMatrixValidationRequestBody;
}

export enum PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum {
    ValidCovarianceMatrix = "valid covariance matrix"
,    InvalidCovarianceMatrixNonSymmetricMatrix = "invalid covariance matrix - non symmetric matrix"
,    InvalidCovarianceMatrixNonPositiveDiagonalElements = "invalid covariance matrix - non positive diagonal elements"
,    InvalidCovarianceMatrixNonPositiveSemiDefiniteMatrix = "invalid covariance matrix - non positive semi-definite matrix"
}


export class PostAssetsCovarianceMatrixValidation200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum;
}


export class PostAssetsCovarianceMatrixValidationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAssetsCovarianceMatrixValidation200ApplicationJsonObject?: PostAssetsCovarianceMatrixValidation200ApplicationJson;

  @Metadata()
  statusCode: number;
}
