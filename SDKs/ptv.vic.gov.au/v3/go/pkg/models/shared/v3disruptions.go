package shared



type V3Disruptions struct {
    Ferry []V3Disruption `json:"ferry,omitempty"`
    General []V3Disruption `json:"general,omitempty"`
    InterstateTrain []V3Disruption `json:"interstate_train,omitempty"`
    MetroBus []V3Disruption `json:"metro_bus,omitempty"`
    MetroTrain []V3Disruption `json:"metro_train,omitempty"`
    MetroTram []V3Disruption `json:"metro_tram,omitempty"`
    NightBus []V3Disruption `json:"night_bus,omitempty"`
    RegionalBus []V3Disruption `json:"regional_bus,omitempty"`
    RegionalCoach []V3Disruption `json:"regional_coach,omitempty"`
    RegionalTrain []V3Disruption `json:"regional_train,omitempty"`
    SchoolBus []V3Disruption `json:"school_bus,omitempty"`
    Skybus []V3Disruption `json:"skybus,omitempty"`
    Taxi []V3Disruption `json:"taxi,omitempty"`
    Telebus []V3Disruption `json:"telebus,omitempty"`
    
}

