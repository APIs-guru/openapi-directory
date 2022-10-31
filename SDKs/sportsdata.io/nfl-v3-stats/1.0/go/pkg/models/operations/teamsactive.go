package operations

type TeamsActivePathParams struct {
	Format string `pathParam:"style=simple,explode=false,name=format"`
}

type TeamsActiveRequest struct {
	PathParams TeamsActivePathParams
}

type TeamsActiveResponse struct {
	ContentType string
	StatusCode  int64
	Teams       []interface{}
}
