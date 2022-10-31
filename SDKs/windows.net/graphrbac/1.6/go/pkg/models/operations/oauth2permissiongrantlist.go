package operations

import (
	"openapi/pkg/models/shared"
)

type OAuth2PermissionGrantListPathParams struct {
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type OAuth2PermissionGrantListQueryParams struct {
	DollarFilter *string `queryParam:"style=form,explode=true,name=$filter"`
	APIVersion   string  `queryParam:"style=form,explode=true,name=api-version"`
}

type OAuth2PermissionGrantListRequest struct {
	PathParams  OAuth2PermissionGrantListPathParams
	QueryParams OAuth2PermissionGrantListQueryParams
}

type OAuth2PermissionGrantListResponse struct {
	ContentType                     string
	OAuth2PermissionGrantListResult *shared.OAuth2PermissionGrantListResult
	StatusCode                      int64
}
