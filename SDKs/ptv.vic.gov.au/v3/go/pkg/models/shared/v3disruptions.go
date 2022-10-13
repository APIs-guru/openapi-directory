package shared

type V3Disruptions struct {
	Ferry           []V3Disruption `json:"ferry"`
	General         []V3Disruption `json:"general"`
	InterstateTrain []V3Disruption `json:"interstate_train"`
	MetroBus        []V3Disruption `json:"metro_bus"`
	MetroTrain      []V3Disruption `json:"metro_train"`
	MetroTram       []V3Disruption `json:"metro_tram"`
	NightBus        []V3Disruption `json:"night_bus"`
	RegionalBus     []V3Disruption `json:"regional_bus"`
	RegionalCoach   []V3Disruption `json:"regional_coach"`
	RegionalTrain   []V3Disruption `json:"regional_train"`
	SchoolBus       []V3Disruption `json:"school_bus"`
	Skybus          []V3Disruption `json:"skybus"`
	Taxi            []V3Disruption `json:"taxi"`
	Telebus         []V3Disruption `json:"telebus"`
}
