package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePayorLinksSecurity struct {
	OAuthVeloBackOffice shared.SchemeOAuthVeloBackOffice `security:"scheme,type=oauth2"`
}

type CreatePayorLinksRequest struct {
	Request  shared.CreatePayorLinkRequest `request:"mediaType=application/json"`
	Security CreatePayorLinksSecurity
}

type CreatePayorLinksResponse struct {
	ContentType       string
	Headers           map[string][]string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
}
