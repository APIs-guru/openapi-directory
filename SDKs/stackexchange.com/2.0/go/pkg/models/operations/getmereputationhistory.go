package operations



type GetMeReputationHistoryQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    
}

type GetMeReputationHistoryRequest struct {
    QueryParams GetMeReputationHistoryQueryParams 
    
}

type GetMeReputationHistoryResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

