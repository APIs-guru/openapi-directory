package operations

import (
	"openapi/pkg/models/shared"
)

type V3CreatePayeeMultipartFormData struct {
	File    []shared.CreatePayeesCsvRequest `multipartForm:"name=file,json"`
	PayorID *string                         `multipartForm:"name=payorId"`
}

type V3CreatePayeeRequestsInput struct {
	CreatePayeesRequest *shared.CreatePayeesRequestInput `request:"mediaType=application/json"`
	Object              *V3CreatePayeeMultipartFormData  `request:"mediaType=multipart/form-data"`
}

type V3CreatePayeeRequest struct {
	Request *V3CreatePayeeRequestsInput
}

type V3CreatePayeeResponse struct {
	ContentType             string
	CreatePayeesCsvResponse *shared.CreatePayeesCsvResponse
	StatusCode              int64
	InlineResponse400       *interface{}
	InlineResponse401       *interface{}
	InlineResponse403       *interface{}
	InlineResponse404       *interface{}
}
