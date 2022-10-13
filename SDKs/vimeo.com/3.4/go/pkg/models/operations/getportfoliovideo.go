package operations

import (
	"openapi/pkg/models/shared"
)

type GetPortfolioVideoPathParams struct {
	PortfolioID float64 `pathParam:"style=simple,explode=false,name=portfolio_id"`
	UserID      float64 `pathParam:"style=simple,explode=false,name=user_id"`
	VideoID     float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type GetPortfolioVideoRequest struct {
	PathParams GetPortfolioVideoPathParams
}

type GetPortfolioVideoResponse struct {
	ContentType string
	StatusCode  int64
	Video       *shared.Video
}
