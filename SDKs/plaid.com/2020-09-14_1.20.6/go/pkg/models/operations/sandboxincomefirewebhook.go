package operations

import (
	"openapi/pkg/models/shared"
)

type SandboxIncomeFireWebhookRequest struct {
	Request shared.SandboxIncomeFireWebhookRequest `request:"mediaType=application/json"`
}

type SandboxIncomeFireWebhookResponse struct {
	ContentType                      string
	Error                            map[string]interface{}
	SandboxIncomeFireWebhookResponse *shared.SandboxIncomeFireWebhookResponse
	StatusCode                       int64
}
