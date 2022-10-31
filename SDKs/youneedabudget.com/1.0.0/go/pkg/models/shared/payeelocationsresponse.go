package shared

type PayeeLocationsResponseData struct {
	PayeeLocations []PayeeLocation `json:"payee_locations"`
}

type PayeeLocationsResponse struct {
	Data PayeeLocationsResponseData `json:"data"`
}
