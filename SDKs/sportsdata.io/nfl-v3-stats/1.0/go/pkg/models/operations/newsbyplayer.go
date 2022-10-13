package operations

type NewsByPlayerPathParams struct {
	Format   string `pathParam:"style=simple,explode=false,name=format"`
	Playerid string `pathParam:"style=simple,explode=false,name=playerid"`
}

type NewsByPlayerRequest struct {
	PathParams NewsByPlayerPathParams
}

type NewsByPlayerResponse struct {
	ContentType string
	News        []interface{}
	StatusCode  int64
}
