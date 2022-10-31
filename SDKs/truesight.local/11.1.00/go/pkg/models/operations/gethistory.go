package operations



type GetHistoryQueryParams struct {
    ApplicationID *string `queryParam:"style=form,explode=true,name=applicationId"`
    From *int64 `queryParam:"style=form,explode=true,name=from"`
    GroupID *string `queryParam:"style=form,explode=true,name=groupId"`
    ServiceID *string `queryParam:"style=form,explode=true,name=serviceId"`
    To *int64 `queryParam:"style=form,explode=true,name=to"`
    
}

type GetHistoryRequest struct {
    QueryParams GetHistoryQueryParams 
    
}

type GetHistoryResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

