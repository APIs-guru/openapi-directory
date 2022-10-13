package operations

type StandingsPathParams struct {
	Format string `pathParam:"style=simple,explode=false,name=format"`
	Season string `pathParam:"style=simple,explode=false,name=season"`
}

type StandingsRequest struct {
	PathParams StandingsPathParams
}

type StandingsResponse struct {
	ContentType string
	Standings   []interface{}
	StatusCode  int64
}
