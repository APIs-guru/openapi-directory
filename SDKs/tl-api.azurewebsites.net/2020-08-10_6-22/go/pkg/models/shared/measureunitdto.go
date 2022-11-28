package shared

// MeasureUnitDto
// Mesure unit to represent article mesure unit
type MeasureUnitDto struct {
	ID   *int32  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
}
