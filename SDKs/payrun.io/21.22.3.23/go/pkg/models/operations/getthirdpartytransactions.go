package operations

import (
"openapi/pkg/models/shared")

type GetThirdPartyTransactionsPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetThirdPartyTransactionsHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetThirdPartyTransactionsRequest struct {
    PathParams GetThirdPartyTransactionsPathParams 
    Headers GetThirdPartyTransactionsHeaders 
    
}

type GetThirdPartyTransactionsResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

