package operations

import (
"openapi/pkg/models/shared")


type GetFilesSortEnum string

const (
    GetFilesSortEnumName GetFilesSortEnum = "Name"
GetFilesSortEnumSize GetFilesSortEnum = "Size"
GetFilesSortEnumCreatedDateUtc GetFilesSortEnum = "CreatedDateUTC"
)


type GetFilesQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Sort *GetFilesSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetFilesHeaders struct {
    XeroTenantID string `header:"style=simple,explode=false,name=xero-tenant-id"`
    
}

type GetFilesSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetFilesRequest struct {
    QueryParams GetFilesQueryParams 
    Headers GetFilesHeaders 
    Security GetFilesSecurity 
    
}

type GetFilesResponse struct {
    ContentType string 
    Files *shared.Files 
    StatusCode int64 
    
}

