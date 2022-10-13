package operations

import (
	"openapi/pkg/models/shared"
)

type GetFoldersSortEnum string

const (
	GetFoldersSortEnumName           GetFoldersSortEnum = "Name"
	GetFoldersSortEnumSize           GetFoldersSortEnum = "Size"
	GetFoldersSortEnumCreatedDateUtc GetFoldersSortEnum = "CreatedDateUTC"
)

type GetFoldersQueryParams struct {
	Sort *GetFoldersSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type GetFoldersHeaders struct {
	XeroTenantID string `header:"name=xero-tenant-id"`
}

type GetFoldersSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetFoldersRequest struct {
	QueryParams GetFoldersQueryParams
	Headers     GetFoldersHeaders
	Security    GetFoldersSecurity
}

type GetFoldersResponse struct {
	ContentType string
	Folders     []interface{}
	StatusCode  int64
}
