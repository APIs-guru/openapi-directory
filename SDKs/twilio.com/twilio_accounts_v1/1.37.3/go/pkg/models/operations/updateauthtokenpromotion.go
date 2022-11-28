package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateAuthTokenPromotionServerList = []string{
	"https://accounts.twilio.com",
}

type UpdateAuthTokenPromotionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateAuthTokenPromotionRequest struct {
	ServerURL *string
	Security  UpdateAuthTokenPromotionSecurity
}

type UpdateAuthTokenPromotionResponse struct {
	ContentType                  string
	StatusCode                   int64
	AccountsV1AuthTokenPromotion *shared.AccountsV1AuthTokenPromotion
}
