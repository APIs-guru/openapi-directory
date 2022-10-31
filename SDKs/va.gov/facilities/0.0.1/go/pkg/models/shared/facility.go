package shared

type FacilityTypeEnum string

const (
	FacilityTypeEnumVaFacilities FacilityTypeEnum = "va_facilities"
)

type Facility struct {
	Attributes FacilityAttributes `json:"attributes"`
	ID         string             `json:"id"`
	Type       FacilityTypeEnum   `json:"type"`
}
