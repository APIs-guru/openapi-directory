package operations

import (
	"openapi/pkg/models/shared"
)

type FolderSettingsGetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type FolderSettingsGetRequest struct {
	PathParams FolderSettingsGetPathParams
}

type FolderSettingsGetResponse struct {
	Body           []byte
	ContentType    string
	FolderSettings *shared.FolderSettings
	StatusCode     int64
}
