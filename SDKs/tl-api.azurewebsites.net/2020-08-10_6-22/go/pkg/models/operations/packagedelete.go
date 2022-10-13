package operations

import (
	"openapi/pkg/models/shared"
)

type PackageDeleteQueryParams struct {
	PackageID *int32 `queryParam:"style=form,explode=true,name=PackageId"`
}

type PackageDeleteRequest struct {
	QueryParams PackageDeleteQueryParams
}

type PackageDeleteResponse struct {
	APIException                *shared.APIException
	ContentType                 string
	DefaultResponseDtoOfBoolean *shared.DefaultResponseDtoOfBoolean
	DefaultResponseDtoOfString  *shared.DefaultResponseDtoOfString
	StatusCode                  int64
}
