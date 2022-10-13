package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateVersionPathParams struct {
	VersionID string `pathParam:"style=simple,explode=false,name=versionId"`
}

type UpdateVersionSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
}

type UpdateVersionRequest struct {
	PathParams UpdateVersionPathParams
	Request    shared.Version `request:"mediaType=application/json"`
	Security   UpdateVersionSecurity
}

type UpdateVersionResponse struct {
	ContentType string
	StatusCode  int64
}
