package operations



type GetFiltersFiltersPathParams struct {
    Filters string `pathParam:"style=simple,explode=false,name=filters"`
    
}

type GetFiltersFiltersRequest struct {
    PathParams GetFiltersFiltersPathParams 
    
}

type GetFiltersFiltersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

