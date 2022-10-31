package operations

import (
"openapi/pkg/models/shared")

type GetWebhooksWebhookIDLogsPathParams struct {
    WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
    
}

type GetWebhooksWebhookIDLogsQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=page[size]"`
    
}

type GetWebhooksWebhookIDLogsRequest struct {
    PathParams GetWebhooksWebhookIDLogsPathParams 
    QueryParams GetWebhooksWebhookIDLogsQueryParams 
    
}

type GetWebhooksWebhookIDLogsResponse struct {
    ContentType string 
    ListWebhookDeliveryLogsResponse *shared.ListWebhookDeliveryLogsResponse 
    StatusCode int64 
    
}

