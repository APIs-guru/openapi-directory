package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveSnippetPathParams struct {
	SiteID string `pathParam:"style=simple,explode=false,name=site_id"`
}

type RetrieveSnippetSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RetrieveSnippetRequest struct {
	PathParams RetrieveSnippetPathParams
	Security   RetrieveSnippetSecurity
}

type RetrieveSnippetResponse struct {
	ContentType             string
	RetrieveSnippetResponse *shared.RetrieveSnippetResponse
	StatusCode              int64
}
