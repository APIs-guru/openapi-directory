package shared

type V3OutletGeolocationResponse struct {
	Outlets []V3OutletGeolocation `json:"outlets"`
	Status  *V3Status             `json:"status"`
}
