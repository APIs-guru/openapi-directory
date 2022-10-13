package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAttachmentsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteAttachmentsIDRequest struct {
	PathParams DeleteAttachmentsIDPathParams
}

type DeleteAttachmentsIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
