package operations

import (
	"openapi/pkg/models/shared"
)

type UpsertSnippetPathParams struct {
	SiteID string `pathParam:"style=simple,explode=false,name=site_id"`
}

type UpsertSnippetSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type UpsertSnippetRequest struct {
	PathParams UpsertSnippetPathParams
	Request    shared.UpsertSnippetRequest `request:"mediaType=application/json"`
	Security   UpsertSnippetSecurity
}

type UpsertSnippetResponse struct {
	ContentType           string
	StatusCode            int64
	UpsertSnippetResponse *shared.UpsertSnippetResponse
}
