package operations

import (
	"openapi/pkg/models/shared"
)

type UsersListPathParams struct {
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type UsersListQueryParams struct {
	DollarExpand *string `queryParam:"style=form,explode=true,name=$expand"`
	DollarFilter *string `queryParam:"style=form,explode=true,name=$filter"`
	DollarTop    *int64  `queryParam:"style=form,explode=true,name=$top"`
	APIVersion   string  `queryParam:"style=form,explode=true,name=api-version"`
}

type UsersListRequest struct {
	PathParams  UsersListPathParams
	QueryParams UsersListQueryParams
}

type UsersListResponse struct {
	ContentType    string
	GraphError     *shared.GraphError
	StatusCode     int64
	UserListResult *shared.UserListResult
}
