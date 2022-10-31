package operations

import (
	"openapi/pkg/models/shared"
)

type ValuesGetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ValuesGetRequest struct {
	PathParams ValuesGetPathParams
}

type ValuesGetResponse struct {
	ContentType string
	StatusCode  int64
	ValuesData  *shared.ValuesData
}
