package operations

import (
"openapi/pkg/models/shared")

type ListJuniperSwitchesSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type ListJuniperSwitchesRequest struct {
    Security ListJuniperSwitchesSecurity 
    
}

type ListJuniperSwitchesResponse struct {
    ContentType string 
    DataSourceListResponse *shared.DataSourceListResponse 
    StatusCode int64 
    
}

