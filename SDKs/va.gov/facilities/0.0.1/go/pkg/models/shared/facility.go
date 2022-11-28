package shared

type FacilityTypeEnum string

const (
	FacilityTypeEnumVaFacilities FacilityTypeEnum = "va_facilities"
)

// Facility
// JSON API-compliant object describing a VA facility
type Facility struct {
	Attributes FacilityAttributes `json:"attributes"`
	ID         string             `json:"id"`
	Type       FacilityTypeEnum   `json:"type"`
}
