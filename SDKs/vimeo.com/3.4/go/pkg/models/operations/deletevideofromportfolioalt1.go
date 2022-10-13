package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVideoFromPortfolioAlt1PathParams struct {
	PortfolioID float64 `pathParam:"style=simple,explode=false,name=portfolio_id"`
	VideoID     float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type DeleteVideoFromPortfolioAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteVideoFromPortfolioAlt1Request struct {
	PathParams DeleteVideoFromPortfolioAlt1PathParams
	Security   DeleteVideoFromPortfolioAlt1Security
}

type DeleteVideoFromPortfolioAlt1Response struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
