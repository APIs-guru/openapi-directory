package operations

import (
"openapi/pkg/models/shared")

type CashinPathParams struct {
    BetID string `pathParam:"style=simple,explode=false,name=betId"`
    
}

type CashinQueryParams struct {
    CashInValue float64 `queryParam:"style=form,explode=true,name=cashInValue"`
    CashinBetDelayID string `queryParam:"style=form,explode=true,name=cashinBetDelayId"`
    
}

type CashinHeaders struct {
    APIKey string `header:"style=simple,explode=false,name=apiKey"`
    APISecret string `header:"style=simple,explode=false,name=apiSecret"`
    APITicket string `header:"style=simple,explode=false,name=apiTicket"`
    
}

type CashinRequest struct {
    PathParams CashinPathParams 
    QueryParams CashinQueryParams 
    Headers CashinHeaders 
    
}

type CashinResponse struct {
    ContentType string 
    StatusCode int64 
    CashInResponse *shared.CashInResponse 
    Errors *shared.Errors 
    
}

