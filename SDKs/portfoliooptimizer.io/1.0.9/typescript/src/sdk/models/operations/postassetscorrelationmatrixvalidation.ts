import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAssetsCorrelationMatrixValidationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets: number;

  @Metadata({ data: "json, name=assetsCorrelationMatrix" })
  assetsCorrelationMatrix: number[][];
}


export class PostAssetsCorrelationMatrixValidationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostAssetsCorrelationMatrixValidationRequestBody;
}

export enum PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum {
    ValidCorrelationMatrix = "valid correlation matrix"
,    InvalidCorrelationMatrixNonSymmetricMatrix = "invalid correlation matrix - non symmetric matrix"
,    InvalidCorrelationMatrixNonPositiveDiagonalElements = "invalid correlation matrix - non positive diagonal elements"
,    InvalidCorrelationMatrixNonPositiveSemiDefiniteMatrix = "invalid correlation matrix - non positive semi-definite matrix"
}


export class PostAssetsCorrelationMatrixValidation200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum;
}


export class PostAssetsCorrelationMatrixValidationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAssetsCorrelationMatrixValidation200ApplicationJsonObject?: PostAssetsCorrelationMatrixValidation200ApplicationJson;

  @Metadata()
  statusCode: number;
}
