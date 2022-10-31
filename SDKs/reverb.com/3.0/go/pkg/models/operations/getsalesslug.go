package operations



type GetSalesSlugPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type GetSalesSlugRequest struct {
    PathParams GetSalesSlugPathParams 
    
}

type GetSalesSlugResponse struct {
    ContentType string 
    StatusCode int64 
    
}

