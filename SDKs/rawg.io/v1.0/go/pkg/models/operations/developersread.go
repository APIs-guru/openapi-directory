package operations

import (
	"openapi/pkg/models/shared"
)

type DevelopersReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DevelopersReadRequest struct {
	PathParams DevelopersReadPathParams
}

type DevelopersReadResponse struct {
	ContentType     string
	DeveloperSingle *shared.DeveloperSingle
	StatusCode      int64
}
