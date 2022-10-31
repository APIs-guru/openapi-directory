package operations

import (
"openapi/pkg/models/shared")

type GetAllThirdPartyTransactionsWithTagPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type GetAllThirdPartyTransactionsWithTagHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetAllThirdPartyTransactionsWithTagRequest struct {
    PathParams GetAllThirdPartyTransactionsWithTagPathParams 
    Headers GetAllThirdPartyTransactionsWithTagHeaders 
    
}

type GetAllThirdPartyTransactionsWithTagResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

