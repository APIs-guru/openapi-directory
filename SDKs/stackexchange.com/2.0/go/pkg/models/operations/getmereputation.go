package operations



type GetMeReputationQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    
}

type GetMeReputationRequest struct {
    QueryParams GetMeReputationQueryParams 
    
}

type GetMeReputationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

