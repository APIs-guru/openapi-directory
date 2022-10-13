package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserAlt1Response struct {
	ContentType string
	StatusCode  int64
	User        *shared.User
}
