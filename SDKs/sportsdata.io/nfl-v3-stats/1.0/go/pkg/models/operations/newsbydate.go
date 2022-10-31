package operations



type NewsByDatePathParams struct {
    Date string `pathParam:"style=simple,explode=false,name=date"`
    Format string `pathParam:"style=simple,explode=false,name=format"`
    
}

type NewsByDateRequest struct {
    PathParams NewsByDatePathParams 
    
}

type NewsByDateResponse struct {
    ContentType string 
    News []interface{} 
    StatusCode int64 
    
}

