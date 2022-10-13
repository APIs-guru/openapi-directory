package shared

type V3DisruptionsResponse struct {
	Disruptions *V3Disruptions `json:"disruptions"`
	Status      *V3Status      `json:"status"`
}
