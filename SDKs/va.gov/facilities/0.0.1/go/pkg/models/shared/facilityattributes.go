package shared




type FacilityAttributesActiveStatusEnum string

const (
    FacilityAttributesActiveStatusEnumA FacilityAttributesActiveStatusEnum = "A"
FacilityAttributesActiveStatusEnumT FacilityAttributesActiveStatusEnum = "T"
)



type FacilityAttributesFacilityTypeEnum string

const (
    FacilityAttributesFacilityTypeEnumVaBenefitsFacility FacilityAttributesFacilityTypeEnum = "va_benefits_facility"
FacilityAttributesFacilityTypeEnumVaCemetery FacilityAttributesFacilityTypeEnum = "va_cemetery"
FacilityAttributesFacilityTypeEnumVaHealthFacility FacilityAttributesFacilityTypeEnum = "va_health_facility"
FacilityAttributesFacilityTypeEnumVetCenter FacilityAttributesFacilityTypeEnum = "vet_center"
)


type FacilityAttributes struct {
    ActiveStatus *FacilityAttributesActiveStatusEnum `json:"active_status,omitempty"`
    Address *Addresses `json:"address,omitempty"`
    Classification *string `json:"classification,omitempty"`
    DetailedServices []DetailedService `json:"detailed_services,omitempty"`
    FacilityType FacilityAttributesFacilityTypeEnum `json:"facility_type"`
    Hours *Hours `json:"hours,omitempty"`
    Lat float32 `json:"lat"`
    Long float32 `json:"long"`
    Mobile *bool `json:"mobile,omitempty"`
    Name string `json:"name"`
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

