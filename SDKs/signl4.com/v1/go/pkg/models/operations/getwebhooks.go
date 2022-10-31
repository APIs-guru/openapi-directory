package operations

import (
"openapi/pkg/models/shared")

type GetWebhooksQueryParams struct {
    TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
    
}

type GetWebhooksRequest struct {
    QueryParams GetWebhooksQueryParams 
    
}

type GetWebhooksResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    WebhookInfos []shared.WebhookInfo 
    
}

