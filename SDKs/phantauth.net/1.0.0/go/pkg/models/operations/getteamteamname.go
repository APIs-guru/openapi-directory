package operations

type GetTeamTeamnamePathParams struct {
	Teamname string `pathParam:"style=simple,explode=false,name=teamname"`
}

type GetTeamTeamnameRequest struct {
	PathParams GetTeamTeamnamePathParams
}

type GetTeamTeamname200ApplicationJSON struct {
	AtID      *string       `json:"@id"`
	Logo      *string       `json:"logo"`
	LogoEmail *string       `json:"logo_email"`
	Members   []interface{} `json:"members"`
	Name      *string       `json:"name"`
	Profile   *string       `json:"profile"`
	Sub       string        `json:"sub"`
}

type GetTeamTeamnameResponse struct {
	ContentType                             string
	GetTeamTeamname200ApplicationJSONObject *GetTeamTeamname200ApplicationJSON
	StatusCode                              int64
}
