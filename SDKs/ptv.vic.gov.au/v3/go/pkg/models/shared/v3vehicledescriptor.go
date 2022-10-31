package shared



type V3VehicleDescriptor struct {
    AirConditioned *bool `json:"air_conditioned,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    Length *string `json:"length,omitempty"`
    LowFloor *bool `json:"low_floor,omitempty"`
    Operator *string `json:"operator,omitempty"`
    Supplier *string `json:"supplier,omitempty"`
    
}

