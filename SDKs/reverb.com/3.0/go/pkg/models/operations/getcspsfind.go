package operations



type GetCspsFindQueryParams struct {
    ID *string `queryParam:"style=form,explode=true,name=id"`
    Slug *string `queryParam:"style=form,explode=true,name=slug"`
    
}

type GetCspsFindRequest struct {
    QueryParams GetCspsFindQueryParams 
    
}

type GetCspsFindResponse struct {
    ContentType string 
    StatusCode int64 
    
}

