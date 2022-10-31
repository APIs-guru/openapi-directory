package operations



type ApplyNodePathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
    
}

type ApplyNodeRequest struct {
    PathParams ApplyNodePathParams 
    
}

type ApplyNodeResponse struct {
    ContentType string 
    StatusCode int64 
    ApplyNode200TextPlainString *string 
    
}

