package operations



type DeleteMyCuratedSetProductProductIDPathParams struct {
    ProductID string `pathParam:"style=simple,explode=false,name=product_id"`
    
}

type DeleteMyCuratedSetProductProductIDRequest struct {
    PathParams DeleteMyCuratedSetProductProductIDPathParams 
    
}

type DeleteMyCuratedSetProductProductIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

