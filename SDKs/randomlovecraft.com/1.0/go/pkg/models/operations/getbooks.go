package operations

import (
	"openapi/pkg/models/shared"
)

type GetBooks200ApplicationJSON struct {
	Data []shared.Book `json:"data"`
}

type GetBooksResponse struct {
	ContentType                      string
	StatusCode                       int64
	GetBooks200ApplicationJSONObject *GetBooks200ApplicationJSON
}
