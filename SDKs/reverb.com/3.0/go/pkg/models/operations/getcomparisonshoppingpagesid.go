package operations



type GetComparisonShoppingPagesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetComparisonShoppingPagesIDRequest struct {
    PathParams GetComparisonShoppingPagesIDPathParams 
    
}

type GetComparisonShoppingPagesIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

