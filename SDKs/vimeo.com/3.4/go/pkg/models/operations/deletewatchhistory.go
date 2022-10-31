package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWatchHistorySecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteWatchHistoryRequest struct {
	Security DeleteWatchHistorySecurity
}

type DeleteWatchHistoryResponse struct {
	ContentType string
	StatusCode  int64
}
