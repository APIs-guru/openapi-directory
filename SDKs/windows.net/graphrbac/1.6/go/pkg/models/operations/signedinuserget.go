package operations

import (
	"openapi/pkg/models/shared"
)

type SignedInUserGetPathParams struct {
	TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
}

type SignedInUserGetQueryParams struct {
	APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
}

type SignedInUserGetRequest struct {
	PathParams  SignedInUserGetPathParams
	QueryParams SignedInUserGetQueryParams
}

type SignedInUserGetResponse struct {
	ContentType string
	GraphError  *shared.GraphError
	StatusCode  int64
	User        map[string]map[string]interface{}
}
