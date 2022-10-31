package operations

import (
	"openapi/pkg/models/shared"
)

type PutGroupsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutGroupsIDRequest struct {
	PathParams PutGroupsIDPathParams
	Request    shared.Group `request:"mediaType=application/json"`
}

type PutGroupsIDResponse struct {
	ContentType string
	Group       *shared.Group
	StatusCode  int64
}
