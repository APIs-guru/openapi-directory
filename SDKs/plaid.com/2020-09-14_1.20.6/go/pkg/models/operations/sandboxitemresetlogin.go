package operations

import (
	"openapi/pkg/models/shared"
)

type SandboxItemResetLoginRequest struct {
	Request shared.SandboxItemResetLoginRequest `request:"mediaType=application/json"`
}

type SandboxItemResetLoginResponse struct {
	ContentType                   string
	SandboxItemResetLoginResponse map[string]interface{}
	StatusCode                    int64
}
