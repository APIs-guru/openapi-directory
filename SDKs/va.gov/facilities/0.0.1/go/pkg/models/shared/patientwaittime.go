package shared

type PatientWaitTimeServiceEnum string

const (
	PatientWaitTimeServiceEnumAudiology        PatientWaitTimeServiceEnum = "Audiology"
	PatientWaitTimeServiceEnumCardiology       PatientWaitTimeServiceEnum = "Cardiology"
	PatientWaitTimeServiceEnumCaregiverSupport PatientWaitTimeServiceEnum = "CaregiverSupport"
	PatientWaitTimeServiceEnumCovid19Vaccine   PatientWaitTimeServiceEnum = "Covid19Vaccine"
	PatientWaitTimeServiceEnumDentalServices   PatientWaitTimeServiceEnum = "DentalServices"
	PatientWaitTimeServiceEnumDermatology      PatientWaitTimeServiceEnum = "Dermatology"
	PatientWaitTimeServiceEnumEmergencyCare    PatientWaitTimeServiceEnum = "EmergencyCare"
	PatientWaitTimeServiceEnumGastroenterology PatientWaitTimeServiceEnum = "Gastroenterology"
	PatientWaitTimeServiceEnumGynecology       PatientWaitTimeServiceEnum = "Gynecology"
	PatientWaitTimeServiceEnumMentalHealthCare PatientWaitTimeServiceEnum = "MentalHealthCare"
	PatientWaitTimeServiceEnumOphthalmology    PatientWaitTimeServiceEnum = "Ophthalmology"
	PatientWaitTimeServiceEnumOptometry        PatientWaitTimeServiceEnum = "Optometry"
	PatientWaitTimeServiceEnumOrthopedics      PatientWaitTimeServiceEnum = "Orthopedics"
	PatientWaitTimeServiceEnumNutrition        PatientWaitTimeServiceEnum = "Nutrition"
	PatientWaitTimeServiceEnumPodiatry         PatientWaitTimeServiceEnum = "Podiatry"
	PatientWaitTimeServiceEnumPrimaryCare      PatientWaitTimeServiceEnum = "PrimaryCare"
	PatientWaitTimeServiceEnumSpecialtyCare    PatientWaitTimeServiceEnum = "SpecialtyCare"
	PatientWaitTimeServiceEnumUrgentCare       PatientWaitTimeServiceEnum = "UrgentCare"
	PatientWaitTimeServiceEnumUrology          PatientWaitTimeServiceEnum = "Urology"
	PatientWaitTimeServiceEnumWomensHealth     PatientWaitTimeServiceEnum = "WomensHealth"
)

type PatientWaitTime struct {
	Established *float64                   `json:"established,omitempty"`
	New         *float64                   `json:"new,omitempty"`
	Service     PatientWaitTimeServiceEnum `json:"service"`
}
