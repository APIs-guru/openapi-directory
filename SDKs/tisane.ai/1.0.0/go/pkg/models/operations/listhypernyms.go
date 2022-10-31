package operations



type ListHypernymsQueryParams struct {
    Family *string `queryParam:"style=form,explode=true,name=family"`
    MaxLevel *string `queryParam:"style=form,explode=true,name=maxLevel"`
    
}

type ListHypernymsRequest struct {
    QueryParams ListHypernymsQueryParams 
    
}

type ListHypernymsResponse struct {
    ContentType string 
    StatusCode int64 
    ListHypernyms200ApplicationJSONArrays [][]float64 
    
}

