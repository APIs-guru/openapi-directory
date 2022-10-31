package operations



type GetAdminRequestsQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Since *string `queryParam:"style=form,explode=true,name=since"`
    
}

type GetAdminRequestsRequest struct {
    QueryParams GetAdminRequestsQueryParams 
    
}

type GetAdminRequestsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

