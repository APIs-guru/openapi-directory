package shared

type V3StopAmenityDetails struct {
	CarParking *string `json:"car_parking,omitempty"`
	Cctv       *bool   `json:"cctv,omitempty"`
	TaxiRank   *bool   `json:"taxi_rank,omitempty"`
	Toilet     *bool   `json:"toilet,omitempty"`
}
