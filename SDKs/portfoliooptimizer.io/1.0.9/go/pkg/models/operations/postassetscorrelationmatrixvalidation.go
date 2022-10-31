package operations



type PostAssetsCorrelationMatrixValidationRequestBody struct {
    Assets int64 `json:"assets"`
    AssetsCorrelationMatrix [][]float64 `json:"assetsCorrelationMatrix"`
    
}

type PostAssetsCorrelationMatrixValidationRequest struct {
    Request PostAssetsCorrelationMatrixValidationRequestBody `request:"mediaType=application/json"`
    
}


type PostAssetsCorrelationMatrixValidation200ApplicationJSONMessageEnum string

const (
    PostAssetsCorrelationMatrixValidation200ApplicationJSONMessageEnumValidCorrelationMatrix PostAssetsCorrelationMatrixValidation200ApplicationJSONMessageEnum = "valid correlation matrix"
PostAssetsCorrelationMatrixValidation200ApplicationJSONMessageEnumInvalidCorrelationMatrixNonSymmetricMatrix PostAssetsCorrelationMatrixValidation200ApplicationJSONMessageEnum = "invalid correlation matrix - non symmetric matrix"
PostAssetsCorrelationMatrixValidation200ApplicationJSONMessageEnumInvalidCorrelationMatrixNonPositiveDiagonalElements PostAssetsCorrelationMatrixValidation200ApplicationJSONMessageEnum = "invalid correlation matrix - non positive diagonal elements"
PostAssetsCorrelationMatrixValidation200ApplicationJSONMessageEnumInvalidCorrelationMatrixNonPositiveSemiDefiniteMatrix PostAssetsCorrelationMatrixValidation200ApplicationJSONMessageEnum = "invalid correlation matrix - non positive semi-definite matrix"
)


type PostAssetsCorrelationMatrixValidation200ApplicationJSON struct {
    Message PostAssetsCorrelationMatrixValidation200ApplicationJSONMessageEnum `json:"message"`
    
}

type PostAssetsCorrelationMatrixValidationResponse struct {
    ContentType string 
    PostAssetsCorrelationMatrixValidation200ApplicationJSONObject *PostAssetsCorrelationMatrixValidation200ApplicationJSON 
    StatusCode int64 
    
}

