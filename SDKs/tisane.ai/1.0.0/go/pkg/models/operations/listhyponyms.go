package operations



type ListHyponymsQueryParams struct {
    Family *string `queryParam:"style=form,explode=true,name=family"`
    MaxLevel *string `queryParam:"style=form,explode=true,name=maxLevel"`
    
}

type ListHyponymsRequest struct {
    QueryParams ListHyponymsQueryParams 
    
}

type ListHyponymsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

