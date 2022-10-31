package operations

import (
	"openapi/pkg/models/shared"
)

type GetSessionQueryParams struct {
	Token *string `queryParam:"style=form,explode=true,name=token"`
}

type GetSessionRequest struct {
	QueryParams GetSessionQueryParams
}

type GetSessionResponse struct {
	ContentType string
	StatusCode  int64
	User        *shared.User
}
