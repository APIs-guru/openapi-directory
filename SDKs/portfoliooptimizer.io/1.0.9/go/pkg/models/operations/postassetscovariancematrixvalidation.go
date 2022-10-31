package operations



type PostAssetsCovarianceMatrixValidationRequestBody struct {
    Assets int64 `json:"assets"`
    AssetsCovarianceMatrix [][]float64 `json:"assetsCovarianceMatrix"`
    
}

type PostAssetsCovarianceMatrixValidationRequest struct {
    Request PostAssetsCovarianceMatrixValidationRequestBody `request:"mediaType=application/json"`
    
}


type PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnum string

const (
    PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnumValidCovarianceMatrix PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnum = "valid covariance matrix"
PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnumInvalidCovarianceMatrixNonSymmetricMatrix PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnum = "invalid covariance matrix - non symmetric matrix"
PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnumInvalidCovarianceMatrixNonPositiveDiagonalElements PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnum = "invalid covariance matrix - non positive diagonal elements"
PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnumInvalidCovarianceMatrixNonPositiveSemiDefiniteMatrix PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnum = "invalid covariance matrix - non positive semi-definite matrix"
)


type PostAssetsCovarianceMatrixValidation200ApplicationJSON struct {
    Message PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnum `json:"message"`
    
}

type PostAssetsCovarianceMatrixValidationResponse struct {
    ContentType string 
    PostAssetsCovarianceMatrixValidation200ApplicationJSONObject *PostAssetsCovarianceMatrixValidation200ApplicationJSON 
    StatusCode int64 
    
}

