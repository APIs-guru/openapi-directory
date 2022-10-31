package operations

import (
	"openapi/pkg/models/shared"
)

type CreatorsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CreatorsReadRequest struct {
	PathParams CreatorsReadPathParams
}

type CreatorsReadResponse struct {
	ContentType  string
	PersonSingle *shared.PersonSingle
	StatusCode   int64
}
