package operations

type GetFleetFleetnamePathParams struct {
	Fleetname string `pathParam:"style=simple,explode=false,name=fleetname"`
}

type GetFleetFleetnameRequest struct {
	PathParams GetFleetFleetnamePathParams
}

type GetFleetFleetname200ApplicationJSON struct {
	AtID      *string       `json:"@id,omitempty"`
	Logo      *string       `json:"logo,omitempty"`
	LogoEmail *string       `json:"logo_email,omitempty"`
	Members   []interface{} `json:"members,omitempty"`
	Name      *string       `json:"name,omitempty"`
	Profile   *string       `json:"profile,omitempty"`
	Sub       string        `json:"sub"`
}

type GetFleetFleetnameResponse struct {
	ContentType                               string
	GetFleetFleetname200ApplicationJSONObject *GetFleetFleetname200ApplicationJSON
	StatusCode                                int64
}
