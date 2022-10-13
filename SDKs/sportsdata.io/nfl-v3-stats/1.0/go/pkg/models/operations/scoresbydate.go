package operations

type ScoresByDatePathParams struct {
	Date   string `pathParam:"style=simple,explode=false,name=date"`
	Format string `pathParam:"style=simple,explode=false,name=format"`
}

type ScoresByDateRequest struct {
	PathParams ScoresByDatePathParams
}

type ScoresByDateResponse struct {
	ContentType string
	Scores      []interface{}
	StatusCode  int64
}
