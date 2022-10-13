package shared

type V3StopAmenityDetails struct {
	CarParking *string `json:"car_parking"`
	Cctv       *bool   `json:"cctv"`
	TaxiRank   *bool   `json:"taxi_rank"`
	Toilet     *bool   `json:"toilet"`
}
