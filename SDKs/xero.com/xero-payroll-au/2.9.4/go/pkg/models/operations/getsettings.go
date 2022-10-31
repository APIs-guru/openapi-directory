package operations

import (
"openapi/pkg/models/shared")

type GetSettingsHeaders struct {
    XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
    
}

type GetSettingsSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetSettingsRequest struct {
    Headers GetSettingsHeaders 
    Security GetSettingsSecurity 
    
}

type GetSettingsResponse struct {
    ContentType string 
    SettingsObject *shared.SettingsObject 
    StatusCode int64 
    
}

