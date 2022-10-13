package shared

type PropertiesActiveStatusEnum string

const (
	PropertiesActiveStatusEnumA PropertiesActiveStatusEnum = "A"
	PropertiesActiveStatusEnumT PropertiesActiveStatusEnum = "T"
)

type PropertiesFacilityTypeEnum string

const (
	PropertiesFacilityTypeEnumVaBenefitsFacility PropertiesFacilityTypeEnum = "va_benefits_facility"
	PropertiesFacilityTypeEnumVaCemetery         PropertiesFacilityTypeEnum = "va_cemetery"
	PropertiesFacilityTypeEnumVaHealthFacility   PropertiesFacilityTypeEnum = "va_health_facility"
	PropertiesFacilityTypeEnumVetCenter          PropertiesFacilityTypeEnum = "vet_center"
)

type Properties struct {
	ActiveStatus                        *PropertiesActiveStatusEnum `json:"active_status"`
	Address                             *Addresses                  `json:"address"`
	Classification                      *string                     `json:"classification"`
	DetailedServices                    []DetailedService           `json:"detailed_services"`
	FacilityType                        PropertiesFacilityTypeEnum  `json:"facility_type"`
	Hours                               *Hours                      `json:"hours"`
	ID                                  string                      `json:"id"`
	Mobile                              *bool                       `json:"mobile"`
	Name                                *string                     `json:"name"`
	OperatingStatus                     OperatingStatus             `json:"operating_status"`
	OperationalHoursSpecialInstructions *string                     `json:"operational_hours_special_instructions"`
	Phone                               *Phone                      `json:"phone"`
	Satisfaction                        *Satisfaction               `json:"satisfaction"`
	Services                            *Services                   `json:"services"`
	TimeZone                            *string                     `json:"time_zone"`
	Visn                                *string                     `json:"visn"`
	WaitTimes                           *WaitTimes                  `json:"wait_times"`
	Website                             *string                     `json:"website"`
}
