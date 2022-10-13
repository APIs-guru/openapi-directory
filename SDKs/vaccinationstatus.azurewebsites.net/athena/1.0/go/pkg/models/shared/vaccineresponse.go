package shared

type VaccineResponse struct {
	Age          *float64  `json:"age"`
	Country      *string   `json:"country"`
	Gender       *string   `json:"gender"`
	Name         *string   `json:"name"`
	Vaccinations []Vaccine `json:"vaccinations"`
}
