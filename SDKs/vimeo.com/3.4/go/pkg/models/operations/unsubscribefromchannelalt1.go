package operations

import (
	"openapi/pkg/models/shared"
)

type UnsubscribeFromChannelAlt1PathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
}

type UnsubscribeFromChannelAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type UnsubscribeFromChannelAlt1Request struct {
	PathParams UnsubscribeFromChannelAlt1PathParams
	Security   UnsubscribeFromChannelAlt1Security
}

type UnsubscribeFromChannelAlt1Response struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
