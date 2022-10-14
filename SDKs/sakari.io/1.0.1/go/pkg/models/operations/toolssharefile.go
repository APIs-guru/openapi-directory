package operations

import (
	"openapi/pkg/models/shared"
)

type ToolsShareFileMultipartFormDataMedia struct {
	Content []byte `multipartForm:"content"`
	Media   string `multipartForm:"name=media"`
}

type ToolsShareFileMultipartFormData struct {
	Media *ToolsShareFileMultipartFormDataMedia `multipartForm:"file"`
}

type ToolsShareFileRequests struct {
	BinaryString []byte                           `request:"mediaType=application/octet-stream"`
	Object       *ToolsShareFileMultipartFormData `request:"mediaType=multipart/form-data"`
}

type ToolsShareFileSecurity struct {
	SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
}

type ToolsShareFileRequest struct {
	Request  ToolsShareFileRequests
	Security ToolsShareFileSecurity
}

type ToolsShareFileResponse struct {
	ContentType       string
	ErrorResponse     *shared.ErrorResponse
	ShareFileResponse *shared.ShareFileResponse
	StatusCode        int64
}
