package operations

import (
	"openapi/pkg/models/shared"
)

type GetPrepaidSettingsResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	PrepaidSettingsInfo  *shared.PrepaidSettingsInfo
	StatusCode           int64
}
