package operations

import (
	"openapi/pkg/models/shared"
)

type SandboxOauthSelectAccountsRequest struct {
	Request shared.SandboxOauthSelectAccountsRequest `request:"mediaType=application/json"`
}

type SandboxOauthSelectAccountsResponse struct {
	ContentType                        string
	Error                              map[string]interface{}
	SandboxOauthSelectAccountsResponse map[string]interface{}
	StatusCode                         int64
}
