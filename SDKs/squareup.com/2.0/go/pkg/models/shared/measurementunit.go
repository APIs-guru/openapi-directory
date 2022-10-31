package shared



type MeasurementUnit struct {
    AreaUnit *string `json:"area_unit,omitempty"`
    CustomUnit *MeasurementUnitCustom `json:"custom_unit,omitempty"`
    GenericUnit *string `json:"generic_unit,omitempty"`
    LengthUnit *string `json:"length_unit,omitempty"`
    TimeUnit *string `json:"time_unit,omitempty"`
    Type *string `json:"type,omitempty"`
    VolumeUnit *string `json:"volume_unit,omitempty"`
    WeightUnit *string `json:"weight_unit,omitempty"`
    
}

