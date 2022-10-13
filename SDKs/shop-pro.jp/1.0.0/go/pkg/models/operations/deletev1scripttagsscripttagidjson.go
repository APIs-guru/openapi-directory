package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteV1ScriptTagsScriptTagIDJSONPathParams struct {
	ScriptTagID int64 `pathParam:"style=simple,explode=false,name=scriptTagId"`
}

type DeleteV1ScriptTagsScriptTagIDJSONSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteV1ScriptTagsScriptTagIDJSONRequest struct {
	PathParams DeleteV1ScriptTagsScriptTagIDJSONPathParams
	Security   DeleteV1ScriptTagsScriptTagIDJSONSecurity
}

type DeleteV1ScriptTagsScriptTagIDJSONResponse struct {
	ContentType string
	StatusCode  int64
}
