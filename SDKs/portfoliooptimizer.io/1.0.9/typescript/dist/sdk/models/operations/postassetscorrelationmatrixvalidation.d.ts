import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAssetsCorrelationMatrixValidationRequestBody extends SpeakeasyBase {
    assets: number;
    assetsCorrelationMatrix: number[][];
}
export declare enum PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum {
    ValidCorrelationMatrix = "valid correlation matrix",
    InvalidCorrelationMatrixNonSymmetricMatrix = "invalid correlation matrix - non symmetric matrix",
    InvalidCorrelationMatrixNonPositiveDiagonalElements = "invalid correlation matrix - non positive diagonal elements",
    InvalidCorrelationMatrixNonPositiveSemiDefiniteMatrix = "invalid correlation matrix - non positive semi-definite matrix"
}
export declare class PostAssetsCorrelationMatrixValidation200ApplicationJson extends SpeakeasyBase {
    message: PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum;
}
export declare class PostAssetsCorrelationMatrixValidationRequest extends SpeakeasyBase {
    request: PostAssetsCorrelationMatrixValidationRequestBody;
}
export declare class PostAssetsCorrelationMatrixValidationResponse extends SpeakeasyBase {
    contentType: string;
    postAssetsCorrelationMatrixValidation200ApplicationJsonObject?: PostAssetsCorrelationMatrixValidation200ApplicationJson;
    statusCode: number;
}
