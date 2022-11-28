import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAssetsCovarianceMatrixValidationRequestBody extends SpeakeasyBase {
    assets: number;
    assetsCovarianceMatrix: number[][];
}
export declare enum PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum {
    ValidCovarianceMatrix = "valid covariance matrix",
    InvalidCovarianceMatrixNonSymmetricMatrix = "invalid covariance matrix - non symmetric matrix",
    InvalidCovarianceMatrixNonPositiveDiagonalElements = "invalid covariance matrix - non positive diagonal elements",
    InvalidCovarianceMatrixNonPositiveSemiDefiniteMatrix = "invalid covariance matrix - non positive semi-definite matrix"
}
export declare class PostAssetsCovarianceMatrixValidation200ApplicationJson extends SpeakeasyBase {
    message: PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum;
}
export declare class PostAssetsCovarianceMatrixValidationRequest extends SpeakeasyBase {
    request: PostAssetsCovarianceMatrixValidationRequestBody;
}
export declare class PostAssetsCovarianceMatrixValidationResponse extends SpeakeasyBase {
    contentType: string;
    postAssetsCovarianceMatrixValidation200ApplicationJsonObject?: PostAssetsCovarianceMatrixValidation200ApplicationJson;
    statusCode: number;
}
