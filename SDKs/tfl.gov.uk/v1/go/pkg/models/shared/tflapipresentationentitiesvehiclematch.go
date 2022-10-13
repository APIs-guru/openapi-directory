package shared

type TflAPIPresentationEntitiesVehicleMatchComplianceEnum string

const (
	TflAPIPresentationEntitiesVehicleMatchComplianceEnumNotAvailable TflAPIPresentationEntitiesVehicleMatchComplianceEnum = "NotAvailable"
	TflAPIPresentationEntitiesVehicleMatchComplianceEnumNotCompliant TflAPIPresentationEntitiesVehicleMatchComplianceEnum = "NotCompliant"
	TflAPIPresentationEntitiesVehicleMatchComplianceEnumCompliant    TflAPIPresentationEntitiesVehicleMatchComplianceEnum = "Compliant"
	TflAPIPresentationEntitiesVehicleMatchComplianceEnumExempt       TflAPIPresentationEntitiesVehicleMatchComplianceEnum = "Exempt"
)

type TflAPIPresentationEntitiesVehicleMatch struct {
	Colour     *string                                               `json:"colour"`
	Compliance *TflAPIPresentationEntitiesVehicleMatchComplianceEnum `json:"compliance"`
	Make       *string                                               `json:"make"`
	Model      *string                                               `json:"model"`
	Type       *string                                               `json:"type"`
	Vrm        *string                                               `json:"vrm"`
}
