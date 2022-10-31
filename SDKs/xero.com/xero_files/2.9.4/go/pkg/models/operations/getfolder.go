package operations

import (
"openapi/pkg/models/shared")

type GetFolderPathParams struct {
    FolderID string `pathParam:"style=simple,explode=false,name=FolderId"`
    
}

type GetFolderHeaders struct {
    XeroTenantID string `header:"style=simple,explode=false,name=xero-tenant-id"`
    
}

type GetFolderSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetFolderRequest struct {
    PathParams GetFolderPathParams 
    Headers GetFolderHeaders 
    Security GetFolderSecurity 
    
}

type GetFolderResponse struct {
    ContentType string 
    Folder *interface{} 
    StatusCode int64 
    
}

