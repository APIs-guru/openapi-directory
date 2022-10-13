package operations

type NewsByTeamPathParams struct {
	Format string `pathParam:"style=simple,explode=false,name=format"`
	Team   string `pathParam:"style=simple,explode=false,name=team"`
}

type NewsByTeamRequest struct {
	PathParams NewsByTeamPathParams
}

type NewsByTeamResponse struct {
	ContentType string
	News        []interface{}
	StatusCode  int64
}
