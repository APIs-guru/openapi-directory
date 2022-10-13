package operations

import (
	"openapi/pkg/models/shared"
)

type UploadFileQueryParams struct {
	FolderID *string `queryParam:"style=form,explode=true,name=FolderId"`
}

type UploadFileHeaders struct {
	XeroTenantID string `header:"name=xero-tenant-id"`
}

type UploadFileRequestBody struct {
	Body     *string `multipartForm:"name=body"`
	Filename *string `multipartForm:"name=filename"`
	MimeType *string `multipartForm:"name=mimeType"`
	Name     *string `multipartForm:"name=name"`
}

type UploadFileSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UploadFileRequest struct {
	QueryParams UploadFileQueryParams
	Headers     UploadFileHeaders
	Request     *UploadFileRequestBody `request:"mediaType=multipart/form-data"`
	Security    UploadFileSecurity
}

type UploadFileResponse struct {
	ContentType string
	FileObject  *shared.FileObject
	StatusCode  int64
}
