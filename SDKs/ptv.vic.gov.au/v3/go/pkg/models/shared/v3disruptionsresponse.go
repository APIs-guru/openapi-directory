package shared

type V3DisruptionsResponse struct {
	Disruptions *V3Disruptions `json:"disruptions,omitempty"`
	Status      *V3Status      `json:"status,omitempty"`
}
