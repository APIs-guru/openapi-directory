package operations



type DeleteAttributesComputedIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteAttributesComputedIDRequest struct {
    PathParams DeleteAttributesComputedIDPathParams 
    
}

type DeleteAttributesComputedIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

