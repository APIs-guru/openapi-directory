package shared




type ScoreDataSetEnum string

const (
    ScoreDataSetEnumAffiliationsAndInsurances ScoreDataSetEnum = "affiliations_and_insurances"
ScoreDataSetEnumAlertInMedia ScoreDataSetEnum = "alert_in_media"
ScoreDataSetEnumBehavior ScoreDataSetEnum = "behavior"
ScoreDataSetEnumBusinessBackground ScoreDataSetEnum = "business_background"
ScoreDataSetEnumCriminalRecord ScoreDataSetEnum = "criminal_record"
ScoreDataSetEnumDrivingLicenses ScoreDataSetEnum = "driving_licenses"
ScoreDataSetEnumInternationalBackground ScoreDataSetEnum = "international_background"
ScoreDataSetEnumLegalBackground ScoreDataSetEnum = "legal_background"
ScoreDataSetEnumPersonalIdentity ScoreDataSetEnum = "personal_identity"
ScoreDataSetEnumProfessionalBackground ScoreDataSetEnum = "professional_background"
ScoreDataSetEnumTrafficFines ScoreDataSetEnum = "traffic_fines"
ScoreDataSetEnumVehicleInformation ScoreDataSetEnum = "vehicle_information"
ScoreDataSetEnumVehiclePermits ScoreDataSetEnum = "vehicle_permits"
ScoreDataSetEnumTaxesAndFinances ScoreDataSetEnum = "taxes_and_finances"
)



type ScoreResultEnum string

const (
    ScoreResultEnumPending ScoreResultEnum = "pending"
ScoreResultEnumFound ScoreResultEnum = "found"
ScoreResultEnumNotFound ScoreResultEnum = "not_found"
ScoreResultEnumError ScoreResultEnum = "error"
ScoreResultEnumDelayed ScoreResultEnum = "delayed"
ScoreResultEnumIgnored ScoreResultEnum = "ignored"
)


type Score struct {
    ByID ScoreDetail `json:"by_id"`
    ByName ScoreDetail `json:"by_name"`
    DataSet ScoreDataSetEnum `json:"data_set"`
    Result *ScoreResultEnum `json:"result,omitempty"`
    Score float32 `json:"score"`
    Severity interface{} `json:"severity"`
    
}

