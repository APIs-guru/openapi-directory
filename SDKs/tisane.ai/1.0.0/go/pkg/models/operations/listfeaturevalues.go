package operations



type ListFeatureValuesQueryParams struct {
    Description *string `queryParam:"style=form,explode=true,name=description"`
    Language *string `queryParam:"style=form,explode=true,name=language"`
    Type *string `queryParam:"style=form,explode=true,name=type"`
    
}

type ListFeatureValuesRequest struct {
    QueryParams ListFeatureValuesQueryParams 
    
}

type ListFeatureValuesResponse struct {
    ContentType string 
    StatusCode int64 
    ListFeatureValues200ApplicationJSONStrings []string 
    
}

