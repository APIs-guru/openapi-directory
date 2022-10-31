package shared




type CreateConfigInputCountryEnum string

const (
    CreateConfigInputCountryEnumAll CreateConfigInputCountryEnum = "ALL"
CreateConfigInputCountryEnumBr CreateConfigInputCountryEnum = "BR"
CreateConfigInputCountryEnumCl CreateConfigInputCountryEnum = "CL"
CreateConfigInputCountryEnumCo CreateConfigInputCountryEnum = "CO"
CreateConfigInputCountryEnumCr CreateConfigInputCountryEnum = "CR"
CreateConfigInputCountryEnumEc CreateConfigInputCountryEnum = "EC"
CreateConfigInputCountryEnumMx CreateConfigInputCountryEnum = "MX"
CreateConfigInputCountryEnumPe CreateConfigInputCountryEnum = "PE"
CreateConfigInputCountryEnumAr CreateConfigInputCountryEnum = "AR"
)


type CreateConfigInput struct {
    Country CreateConfigInputCountryEnum `form:"name=country"`
    DatasetAffiliationsAndInsurances *float32 `form:"name=dataset_affiliations_and_insurances"`
    DatasetAlertInMedia *float32 `form:"name=dataset_alert_in_media"`
    DatasetBusinessBackground *float32 `form:"name=dataset_business_background"`
    DatasetCriminalRecord *float32 `form:"name=dataset_criminal_record"`
    DatasetDrivingLicenses *float32 `form:"name=dataset_driving_licenses"`
    DatasetInternationalBackground *float32 `form:"name=dataset_international_background"`
    DatasetLegalBackground *float32 `form:"name=dataset_legal_background"`
    DatasetPersonalIdentity *float32 `form:"name=dataset_personal_identity"`
    DatasetProfessionalBackground *float32 `form:"name=dataset_professional_background"`
    DatasetTaxesAndFinances *float32 `form:"name=dataset_taxes_and_finances"`
    DatasetTrafficFines *float32 `form:"name=dataset_traffic_fines"`
    DatasetVehicleInformation *float32 `form:"name=dataset_vehicle_information"`
    DatasetVehiclePermits *float32 `form:"name=dataset_vehicle_permits"`
    Type string `form:"name=type"`
    
}

