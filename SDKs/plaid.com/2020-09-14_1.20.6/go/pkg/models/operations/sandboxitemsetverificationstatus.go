package operations

import (
	"openapi/pkg/models/shared"
)

type SandboxItemSetVerificationStatusRequest struct {
	Request shared.SandboxItemSetVerificationStatusRequest `request:"mediaType=application/json"`
}

type SandboxItemSetVerificationStatusResponse struct {
	ContentType                              string
	SandboxItemSetVerificationStatusResponse map[string]interface{}
	StatusCode                               int64
}
