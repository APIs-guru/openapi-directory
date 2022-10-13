package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeResponse struct {
	ContentType string
	StatusCode  int64
	User        *shared.User
}
