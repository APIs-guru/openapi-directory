package shared

import (
"time")


type ServicesBenefitsEnum string

const (
    ServicesBenefitsEnumApplyingForBenefits ServicesBenefitsEnum = "ApplyingForBenefits"
ServicesBenefitsEnumBurialClaimAssistance ServicesBenefitsEnum = "BurialClaimAssistance"
ServicesBenefitsEnumDisabilityClaimAssistance ServicesBenefitsEnum = "DisabilityClaimAssistance"
ServicesBenefitsEnumEBenefitsRegistrationAssistance ServicesBenefitsEnum = "eBenefitsRegistrationAssistance"
ServicesBenefitsEnumEducationAndCareerCounseling ServicesBenefitsEnum = "EducationAndCareerCounseling"
ServicesBenefitsEnumEducationClaimAssistance ServicesBenefitsEnum = "EducationClaimAssistance"
ServicesBenefitsEnumFamilyMemberClaimAssistance ServicesBenefitsEnum = "FamilyMemberClaimAssistance"
ServicesBenefitsEnumHomelessAssistance ServicesBenefitsEnum = "HomelessAssistance"
ServicesBenefitsEnumInsuranceClaimAssistanceAndFinancialCounseling ServicesBenefitsEnum = "InsuranceClaimAssistanceAndFinancialCounseling"
ServicesBenefitsEnumIntegratedDisabilityEvaluationSystemAssistance ServicesBenefitsEnum = "IntegratedDisabilityEvaluationSystemAssistance"
ServicesBenefitsEnumPensions ServicesBenefitsEnum = "Pensions"
ServicesBenefitsEnumPreDischargeClaimAssistance ServicesBenefitsEnum = "PreDischargeClaimAssistance"
ServicesBenefitsEnumTransitionAssistance ServicesBenefitsEnum = "TransitionAssistance"
ServicesBenefitsEnumUpdatingDirectDepositInformation ServicesBenefitsEnum = "UpdatingDirectDepositInformation"
ServicesBenefitsEnumVaHomeLoanAssistance ServicesBenefitsEnum = "VAHomeLoanAssistance"
ServicesBenefitsEnumVocationalRehabilitationAndEmploymentAssistance ServicesBenefitsEnum = "VocationalRehabilitationAndEmploymentAssistance"
)



type ServicesHealthEnum string

const (
    ServicesHealthEnumAudiology ServicesHealthEnum = "Audiology"
ServicesHealthEnumCardiology ServicesHealthEnum = "Cardiology"
ServicesHealthEnumCaregiverSupport ServicesHealthEnum = "CaregiverSupport"
ServicesHealthEnumCovid19Vaccine ServicesHealthEnum = "Covid19Vaccine"
ServicesHealthEnumDentalServices ServicesHealthEnum = "DentalServices"
ServicesHealthEnumDermatology ServicesHealthEnum = "Dermatology"
ServicesHealthEnumEmergencyCare ServicesHealthEnum = "EmergencyCare"
ServicesHealthEnumGastroenterology ServicesHealthEnum = "Gastroenterology"
ServicesHealthEnumGynecology ServicesHealthEnum = "Gynecology"
ServicesHealthEnumMentalHealthCare ServicesHealthEnum = "MentalHealthCare"
ServicesHealthEnumOphthalmology ServicesHealthEnum = "Ophthalmology"
ServicesHealthEnumOptometry ServicesHealthEnum = "Optometry"
ServicesHealthEnumOrthopedics ServicesHealthEnum = "Orthopedics"
ServicesHealthEnumNutrition ServicesHealthEnum = "Nutrition"
ServicesHealthEnumPodiatry ServicesHealthEnum = "Podiatry"
ServicesHealthEnumPrimaryCare ServicesHealthEnum = "PrimaryCare"
ServicesHealthEnumSpecialtyCare ServicesHealthEnum = "SpecialtyCare"
ServicesHealthEnumUrgentCare ServicesHealthEnum = "UrgentCare"
ServicesHealthEnumUrology ServicesHealthEnum = "Urology"
ServicesHealthEnumWomensHealth ServicesHealthEnum = "WomensHealth"
)



type ServicesOtherEnum string

const (
    ServicesOtherEnumOnlineScheduling ServicesOtherEnum = "OnlineScheduling"
)


type Services struct {
    Benefits []ServicesBenefitsEnum `json:"benefits,omitempty"`
    Health []ServicesHealthEnum `json:"health,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    Other []ServicesOtherEnum `json:"other,omitempty"`
    
}

