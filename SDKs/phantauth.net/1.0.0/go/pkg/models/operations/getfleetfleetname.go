package operations

type GetFleetFleetnamePathParams struct {
	Fleetname string `pathParam:"style=simple,explode=false,name=fleetname"`
}

type GetFleetFleetnameRequest struct {
	PathParams GetFleetFleetnamePathParams
}

type GetFleetFleetname200ApplicationJSON struct {
	AtID      *string       `json:"@id"`
	Logo      *string       `json:"logo"`
	LogoEmail *string       `json:"logo_email"`
	Members   []interface{} `json:"members"`
	Name      *string       `json:"name"`
	Profile   *string       `json:"profile"`
	Sub       string        `json:"sub"`
}

type GetFleetFleetnameResponse struct {
	ContentType                               string
	GetFleetFleetname200ApplicationJSONObject *GetFleetFleetname200ApplicationJSON
	StatusCode                                int64
}
