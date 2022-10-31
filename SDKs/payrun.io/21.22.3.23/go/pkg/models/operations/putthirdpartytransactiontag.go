package operations

import (
"openapi/pkg/models/shared")

type PutThirdPartyTransactionTagPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    ThirdPartyTransactionID string `pathParam:"style=simple,explode=false,name=ThirdPartyTransactionId"`
    
}

type PutThirdPartyTransactionTagHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PutThirdPartyTransactionTagRequest struct {
    PathParams PutThirdPartyTransactionTagPathParams 
    Headers PutThirdPartyTransactionTagHeaders 
    
}

type PutThirdPartyTransactionTagResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Tag *shared.Tag 
    
}

