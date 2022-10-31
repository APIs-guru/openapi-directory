package operations

import (
	"openapi/pkg/models/shared"
)

type ItemCreatePublicTokenRequest struct {
	Request shared.ItemPublicTokenCreateRequest `request:"mediaType=application/json"`
}

type ItemCreatePublicTokenResponse struct {
	ContentType                   string
	ItemPublicTokenCreateResponse map[string]interface{}
	StatusCode                    int64
}
