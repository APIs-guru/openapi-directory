package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransformDefinitionsFromApplicationHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetTransformDefinitionsFromApplicationRequest struct {
	Headers GetTransformDefinitionsFromApplicationHeaders
}

type GetTransformDefinitionsFromApplicationResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
