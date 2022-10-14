package shared

type VaccineResponse struct {
	Age          *float64  `json:"age,omitempty"`
	Country      *string   `json:"country,omitempty"`
	Gender       *string   `json:"gender,omitempty"`
	Name         *string   `json:"name,omitempty"`
	Vaccinations []Vaccine `json:"vaccinations,omitempty"`
}
