package operations

import (
"openapi/pkg/models/shared")

type GetSubscriptionsSubscriptionIDPrepaidTransactionsPathParams struct {
    SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
    
}

type GetSubscriptionsSubscriptionIDPrepaidTransactionsRequest struct {
    PathParams GetSubscriptionsSubscriptionIDPrepaidTransactionsPathParams 
    
}

type GetSubscriptionsSubscriptionIDPrepaidTransactionsResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    PrepaidTransactionInfos []shared.PrepaidTransactionInfo 
    StatusCode int64 
    
}

