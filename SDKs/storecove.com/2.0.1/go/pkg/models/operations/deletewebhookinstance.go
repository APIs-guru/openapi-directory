package operations



type DeleteWebhookInstancePathParams struct {
    GUID string `pathParam:"style=simple,explode=false,name=guid"`
    
}

type DeleteWebhookInstanceRequest struct {
    PathParams DeleteWebhookInstancePathParams 
    
}

type DeleteWebhookInstanceResponse struct {
    ContentType string 
    StatusCode int64 
    
}

