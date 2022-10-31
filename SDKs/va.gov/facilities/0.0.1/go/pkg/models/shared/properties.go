package shared




type PropertiesActiveStatusEnum string

const (
    PropertiesActiveStatusEnumA PropertiesActiveStatusEnum = "A"
PropertiesActiveStatusEnumT PropertiesActiveStatusEnum = "T"
)



type PropertiesFacilityTypeEnum string

const (
    PropertiesFacilityTypeEnumVaBenefitsFacility PropertiesFacilityTypeEnum = "va_benefits_facility"
PropertiesFacilityTypeEnumVaCemetery PropertiesFacilityTypeEnum = "va_cemetery"
PropertiesFacilityTypeEnumVaHealthFacility PropertiesFacilityTypeEnum = "va_health_facility"
PropertiesFacilityTypeEnumVetCenter PropertiesFacilityTypeEnum = "vet_center"
)


type Properties struct {
    ActiveStatus *PropertiesActiveStatusEnum `json:"active_status,omitempty"`
    Address *Addresses `json:"address,omitempty"`
    Classification *string `json:"classification,omitempty"`
    DetailedServices []DetailedService `json:"detailed_services,omitempty"`
    FacilityType PropertiesFacilityTypeEnum `json:"facility_type"`
    Hours *Hours `json:"hours,omitempty"`
    ID string `json:"id"`
    Mobile *bool `json:"mobile,omitempty"`
    Name *string `json:"name,omitempty"`
    OperatingStatus OperatingStatus `json:"operating_status"`
    OperationalHoursSpecialInstructions *string `json:"operational_hours_special_instructions,omitempty"`
    Phone *Phone `json:"phone,omitempty"`
    Satisfaction *Satisfaction `json:"satisfaction,omitempty"`
    Services *Services `json:"services,omitempty"`
    TimeZone *string `json:"time_zone,omitempty"`
    Visn *string `json:"visn,omitempty"`
    WaitTimes *WaitTimes `json:"wait_times,omitempty"`
    Website *string `json:"website,omitempty"`
    
}

