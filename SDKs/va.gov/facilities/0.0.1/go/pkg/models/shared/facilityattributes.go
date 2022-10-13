package shared

type FacilityAttributesActiveStatusEnum string

const (
	FacilityAttributesActiveStatusEnumA FacilityAttributesActiveStatusEnum = "A"
	FacilityAttributesActiveStatusEnumT FacilityAttributesActiveStatusEnum = "T"
)

type FacilityAttributesFacilityTypeEnum string

const (
	FacilityAttributesFacilityTypeEnumVaBenefitsFacility FacilityAttributesFacilityTypeEnum = "va_benefits_facility"
	FacilityAttributesFacilityTypeEnumVaCemetery         FacilityAttributesFacilityTypeEnum = "va_cemetery"
	FacilityAttributesFacilityTypeEnumVaHealthFacility   FacilityAttributesFacilityTypeEnum = "va_health_facility"
	FacilityAttributesFacilityTypeEnumVetCenter          FacilityAttributesFacilityTypeEnum = "vet_center"
)

type FacilityAttributes struct {
	ActiveStatus                        *FacilityAttributesActiveStatusEnum `json:"active_status"`
	Address                             *Addresses                          `json:"address"`
	Classification                      *string                             `json:"classification"`
	DetailedServices                    []DetailedService                   `json:"detailed_services"`
	FacilityType                        FacilityAttributesFacilityTypeEnum  `json:"facility_type"`
	Hours                               *Hours                              `json:"hours"`
	Lat                                 float32                             `json:"lat"`
	Long                                float32                             `json:"long"`
	Mobile                              *bool                               `json:"mobile"`
	Name                                string                              `json:"name"`
	OperatingStatus                     OperatingStatus                     `json:"operating_status"`
	OperationalHoursSpecialInstructions *string                             `json:"operational_hours_special_instructions"`
	Phone                               *Phone                              `json:"phone"`
	Satisfaction                        *Satisfaction                       `json:"satisfaction"`
	Services                            *Services                           `json:"services"`
	TimeZone                            *string                             `json:"time_zone"`
	Visn                                *string                             `json:"visn"`
	WaitTimes                           *WaitTimes                          `json:"wait_times"`
	Website                             *string                             `json:"website"`
}
