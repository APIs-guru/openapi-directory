package operations

import (
	"openapi/pkg/models/shared"
)

type GamesAchievementsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GamesAchievementsReadRequest struct {
	PathParams GamesAchievementsReadPathParams
}

type GamesAchievementsReadResponse struct {
	ContentType       string
	ParentAchievement *shared.ParentAchievement
	StatusCode        int64
}
