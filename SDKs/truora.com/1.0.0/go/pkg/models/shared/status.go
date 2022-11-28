package shared

type StatusDataSetEnum string

const (
	StatusDataSetEnumAffiliationsAndInsurances StatusDataSetEnum = "affiliations_and_insurances"
	StatusDataSetEnumAlertInMedia              StatusDataSetEnum = "alert_in_media"
	StatusDataSetEnumBehavior                  StatusDataSetEnum = "behavior"
	StatusDataSetEnumBusinessBackground        StatusDataSetEnum = "business_background"
	StatusDataSetEnumCriminalRecord            StatusDataSetEnum = "criminal_record"
	StatusDataSetEnumDrivingLicenses           StatusDataSetEnum = "driving_licenses"
	StatusDataSetEnumInternationalBackground   StatusDataSetEnum = "international_background"
	StatusDataSetEnumLegalBackground           StatusDataSetEnum = "legal_background"
	StatusDataSetEnumPersonalIdentity          StatusDataSetEnum = "personal_identity"
	StatusDataSetEnumProfessionalBackground    StatusDataSetEnum = "professional_background"
	StatusDataSetEnumTrafficFines              StatusDataSetEnum = "traffic_fines"
	StatusDataSetEnumVehicleInformation        StatusDataSetEnum = "vehicle_information"
	StatusDataSetEnumVehiclePermits            StatusDataSetEnum = "vehicle_permits"
	StatusDataSetEnumTaxesAndFinances          StatusDataSetEnum = "taxes_and_finances"
)

// Status
// Represents the status of databases used to generate background checks
type Status struct {
	DataSet       *StatusDataSetEnum `json:"data_set,omitempty"`
	DatabaseID    *string            `json:"database_id,omitempty"`
	DatabaseName  *string            `json:"database_name,omitempty"`
	InvalidInputs []string           `json:"invalid_inputs,omitempty"`
	Status        *interface{}       `json:"status,omitempty"`
}
