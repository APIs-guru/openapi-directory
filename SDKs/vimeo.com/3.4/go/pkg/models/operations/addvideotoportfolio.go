package operations

import (
	"openapi/pkg/models/shared"
)

type AddVideoToPortfolioPathParams struct {
	PortfolioID float64 `pathParam:"style=simple,explode=false,name=portfolio_id"`
	UserID      float64 `pathParam:"style=simple,explode=false,name=user_id"`
	VideoID     float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type AddVideoToPortfolioSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddVideoToPortfolioRequest struct {
	PathParams AddVideoToPortfolioPathParams
	Security   AddVideoToPortfolioSecurity
}

type AddVideoToPortfolioResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
