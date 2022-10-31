package operations

import (
"openapi/pkg/models/shared")

type GetFirewallRulePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetFirewallRuleQueryParams struct {
    Time *int64 `queryParam:"style=form,explode=true,name=time"`
    
}

type GetFirewallRuleSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetFirewallRuleRequest struct {
    PathParams GetFirewallRulePathParams 
    QueryParams GetFirewallRuleQueryParams 
    Security GetFirewallRuleSecurity 
    
}

type GetFirewallRuleResponse struct {
    APIError *shared.APIError 
    BaseFirewallRule *shared.BaseFirewallRule 
    ContentType string 
    StatusCode int64 
    
}

