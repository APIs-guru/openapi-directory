package operations



type PostFactorsResidualizationRequestBodyFactors struct {
    FactorReturns []float64 `json:"factorReturns"`
    
}

type PostFactorsResidualizationRequestBody struct {
    Factors []PostFactorsResidualizationRequestBodyFactors `json:"factors"`
    ResidualizedFactor int64 `json:"residualizedFactor"`
    
}

type PostFactorsResidualizationRequest struct {
    Request PostFactorsResidualizationRequestBody `request:"mediaType=application/json"`
    
}

type PostFactorsResidualization200ApplicationJSON struct {
    ResidualizedFactorReturns []float64 `json:"residualizedFactorReturns"`
    
}

type PostFactorsResidualizationResponse struct {
    ContentType string 
    PostFactorsResidualization200ApplicationJSONObject *PostFactorsResidualization200ApplicationJSON 
    StatusCode int64 
    
}

