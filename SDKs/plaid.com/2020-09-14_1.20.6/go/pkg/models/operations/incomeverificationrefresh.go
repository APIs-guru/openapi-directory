package operations

import (
	"openapi/pkg/models/shared"
)

type IncomeVerificationRefreshRequest struct {
	Request shared.IncomeVerificationRefreshRequest `request:"mediaType=application/json"`
}

type IncomeVerificationRefreshResponse struct {
	ContentType                       string
	Error                             map[string]interface{}
	IncomeVerificationRefreshResponse *shared.IncomeVerificationRefreshResponse
	StatusCode                        int64
}
