package operations

type ScoresByWeekPathParams struct {
	Format string `pathParam:"style=simple,explode=false,name=format"`
	Season string `pathParam:"style=simple,explode=false,name=season"`
	Week   string `pathParam:"style=simple,explode=false,name=week"`
}

type ScoresByWeekRequest struct {
	PathParams ScoresByWeekPathParams
}

type ScoresByWeekResponse struct {
	ContentType string
	Scores      []interface{}
	StatusCode  int64
}
