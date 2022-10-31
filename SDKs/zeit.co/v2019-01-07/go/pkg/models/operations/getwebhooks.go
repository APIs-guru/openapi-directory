package operations



type GetWebhooksQueryParams struct {
    TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
    
}

type GetWebhooksRequest struct {
    QueryParams GetWebhooksQueryParams 
    
}

type GetWebhooksResponse struct {
    ContentType string 
    StatusCode int64 
    Webhooks []interface{} 
    
}

