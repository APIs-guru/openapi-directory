package operations



type DeleteWebhooksRegistrationsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteWebhooksRegistrationsIDRequest struct {
    PathParams DeleteWebhooksRegistrationsIDPathParams 
    
}

type DeleteWebhooksRegistrationsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

