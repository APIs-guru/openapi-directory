package operations

import (
	"openapi/pkg/models/shared"
)

type ListServiceCredentialTypesQueryParams struct {
	Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64                 `queryParam:"style=form,explode=true,name=offset"`
	SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
}

type ListServiceCredentialTypesRequest struct {
	QueryParams ListServiceCredentialTypesQueryParams
}

type ListServiceCredentialTypesResponse struct {
	ContentType                      string
	ServiceCredentialTypesCollection *shared.ServiceCredentialTypesCollection
	StatusCode                       int64
}
