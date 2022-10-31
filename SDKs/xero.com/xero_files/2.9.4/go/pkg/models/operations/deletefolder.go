package operations

import (
"openapi/pkg/models/shared")

type DeleteFolderPathParams struct {
    FolderID string `pathParam:"style=simple,explode=false,name=FolderId"`
    
}

type DeleteFolderHeaders struct {
    XeroTenantID string `header:"style=simple,explode=false,name=xero-tenant-id"`
    
}

type DeleteFolderSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type DeleteFolderRequest struct {
    PathParams DeleteFolderPathParams 
    Headers DeleteFolderHeaders 
    Security DeleteFolderSecurity 
    
}

type DeleteFolderResponse struct {
    ContentType string 
    StatusCode int64 
    
}

