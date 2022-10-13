package operations

import (
	"openapi/pkg/models/shared"
)

type GetCategoriesImagesResponse struct {
	Body                                         []byte
	ContentType                                  string
	ErrorResponseContent                         *shared.ErrorResponseContent
	GetCategoriesImages200ApplicationJSONStrings []string
	GetCategoriesImages200TextJSONStrings        []string
	StatusCode                                   int64
}
