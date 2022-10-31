package operations

type GetScrabbleScorePathParams struct {
	Word string `pathParam:"style=simple,explode=false,name=word"`
}

type GetScrabbleScoreRequest struct {
	PathParams GetScrabbleScorePathParams
}

type GetScrabbleScoreResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
