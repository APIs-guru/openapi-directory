package shared




type TflAPIPresentationEntitiesVehicleMatchComplianceEnum string

const (
    TflAPIPresentationEntitiesVehicleMatchComplianceEnumNotAvailable TflAPIPresentationEntitiesVehicleMatchComplianceEnum = "NotAvailable"
TflAPIPresentationEntitiesVehicleMatchComplianceEnumNotCompliant TflAPIPresentationEntitiesVehicleMatchComplianceEnum = "NotCompliant"
TflAPIPresentationEntitiesVehicleMatchComplianceEnumCompliant TflAPIPresentationEntitiesVehicleMatchComplianceEnum = "Compliant"
TflAPIPresentationEntitiesVehicleMatchComplianceEnumExempt TflAPIPresentationEntitiesVehicleMatchComplianceEnum = "Exempt"
)


type TflAPIPresentationEntitiesVehicleMatch struct {
    Colour *string `json:"colour,omitempty"`
    Compliance *TflAPIPresentationEntitiesVehicleMatchComplianceEnum `json:"compliance,omitempty"`
    Make *string `json:"make,omitempty"`
    Model *string `json:"model,omitempty"`
    Type *string `json:"type,omitempty"`
    Vrm *string `json:"vrm,omitempty"`
    
}

