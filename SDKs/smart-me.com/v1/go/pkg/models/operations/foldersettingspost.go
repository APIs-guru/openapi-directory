package operations

import (
	"openapi/pkg/models/shared"
)

type FolderSettingsPostPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type FolderSettingsPostRequests struct {
	ApplicationXML  []byte                 `request:"mediaType=application/xml"`
	FolderSettings  *shared.FolderSettings `request:"mediaType=application/json"`
	FolderSettings1 *shared.FolderSettings `request:"mediaType=application/x-www-form-urlencoded"`
	FolderSettings2 *shared.FolderSettings `request:"mediaType=text/json"`
	TextXML         []byte                 `request:"mediaType=text/xml"`
}

type FolderSettingsPostRequest struct {
	PathParams FolderSettingsPostPathParams
	Request    FolderSettingsPostRequests
}

type FolderSettingsPostResponse struct {
	Body           []byte
	ContentType    string
	FolderMenuItem *shared.FolderMenuItem
	StatusCode     int64
}
