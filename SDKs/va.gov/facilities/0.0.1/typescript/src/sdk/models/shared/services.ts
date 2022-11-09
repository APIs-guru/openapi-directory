import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ServicesBenefitsEnum {
    ApplyingForBenefits = "ApplyingForBenefits"
,    BurialClaimAssistance = "BurialClaimAssistance"
,    DisabilityClaimAssistance = "DisabilityClaimAssistance"
,    EBenefitsRegistrationAssistance = "eBenefitsRegistrationAssistance"
,    EducationAndCareerCounseling = "EducationAndCareerCounseling"
,    EducationClaimAssistance = "EducationClaimAssistance"
,    FamilyMemberClaimAssistance = "FamilyMemberClaimAssistance"
,    HomelessAssistance = "HomelessAssistance"
,    InsuranceClaimAssistanceAndFinancialCounseling = "InsuranceClaimAssistanceAndFinancialCounseling"
,    IntegratedDisabilityEvaluationSystemAssistance = "IntegratedDisabilityEvaluationSystemAssistance"
,    Pensions = "Pensions"
,    PreDischargeClaimAssistance = "PreDischargeClaimAssistance"
,    TransitionAssistance = "TransitionAssistance"
,    UpdatingDirectDepositInformation = "UpdatingDirectDepositInformation"
,    VaHomeLoanAssistance = "VAHomeLoanAssistance"
,    VocationalRehabilitationAndEmploymentAssistance = "VocationalRehabilitationAndEmploymentAssistance"
}

export enum ServicesHealthEnum {
    Audiology = "Audiology"
,    Cardiology = "Cardiology"
,    CaregiverSupport = "CaregiverSupport"
,    Covid19Vaccine = "Covid19Vaccine"
,    DentalServices = "DentalServices"
,    Dermatology = "Dermatology"
,    EmergencyCare = "EmergencyCare"
,    Gastroenterology = "Gastroenterology"
,    Gynecology = "Gynecology"
,    MentalHealthCare = "MentalHealthCare"
,    Ophthalmology = "Ophthalmology"
,    Optometry = "Optometry"
,    Orthopedics = "Orthopedics"
,    Nutrition = "Nutrition"
,    Podiatry = "Podiatry"
,    PrimaryCare = "PrimaryCare"
,    SpecialtyCare = "SpecialtyCare"
,    UrgentCare = "UrgentCare"
,    Urology = "Urology"
,    WomensHealth = "WomensHealth"
}

export enum ServicesOtherEnum {
    OnlineScheduling = "OnlineScheduling"
}


export class Services extends SpeakeasyBase {
  @Metadata({ data: "json, name=benefits" })
  benefits?: ServicesBenefitsEnum[];

  @Metadata({ data: "json, name=health" })
  health?: ServicesHealthEnum[];

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=other" })
  other?: ServicesOtherEnum[];
}
