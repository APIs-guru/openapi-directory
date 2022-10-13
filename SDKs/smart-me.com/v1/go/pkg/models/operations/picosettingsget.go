package operations

import (
	"openapi/pkg/models/shared"
)

type PicoSettingsGetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PicoSettingsGetRequest struct {
	PathParams PicoSettingsGetPathParams
}

type PicoSettingsGetResponse struct {
	Body            []byte
	ContentType     string
	PicoSettingsDto *shared.PicoSettingsDto
	StatusCode      int64
}
