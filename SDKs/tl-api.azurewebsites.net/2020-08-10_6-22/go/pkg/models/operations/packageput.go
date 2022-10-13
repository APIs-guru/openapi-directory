package operations

import (
	"openapi/pkg/models/shared"
)

type PackagePutRequest struct {
	Request shared.PackageDto `request:"mediaType=application/json"`
}

type PackagePutResponse struct {
	APIException                  *shared.APIException
	ContentType                   string
	DefaultResponseDtoOfStatusDto *shared.DefaultResponseDtoOfStatusDto
	StatusCode                    int64
}
