import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ServicesBenefitsEnum {
    ApplyingForBenefits = "ApplyingForBenefits",
    BurialClaimAssistance = "BurialClaimAssistance",
    DisabilityClaimAssistance = "DisabilityClaimAssistance",
    EBenefitsRegistrationAssistance = "eBenefitsRegistrationAssistance",
    EducationAndCareerCounseling = "EducationAndCareerCounseling",
    EducationClaimAssistance = "EducationClaimAssistance",
    FamilyMemberClaimAssistance = "FamilyMemberClaimAssistance",
    HomelessAssistance = "HomelessAssistance",
    InsuranceClaimAssistanceAndFinancialCounseling = "InsuranceClaimAssistanceAndFinancialCounseling",
    IntegratedDisabilityEvaluationSystemAssistance = "IntegratedDisabilityEvaluationSystemAssistance",
    Pensions = "Pensions",
    PreDischargeClaimAssistance = "PreDischargeClaimAssistance",
    TransitionAssistance = "TransitionAssistance",
    UpdatingDirectDepositInformation = "UpdatingDirectDepositInformation",
    VaHomeLoanAssistance = "VAHomeLoanAssistance",
    VocationalRehabilitationAndEmploymentAssistance = "VocationalRehabilitationAndEmploymentAssistance"
}
export declare enum ServicesHealthEnum {
    Audiology = "Audiology",
    Cardiology = "Cardiology",
    CaregiverSupport = "CaregiverSupport",
    Covid19Vaccine = "Covid19Vaccine",
    DentalServices = "DentalServices",
    Dermatology = "Dermatology",
    EmergencyCare = "EmergencyCare",
    Gastroenterology = "Gastroenterology",
    Gynecology = "Gynecology",
    MentalHealthCare = "MentalHealthCare",
    Ophthalmology = "Ophthalmology",
    Optometry = "Optometry",
    Orthopedics = "Orthopedics",
    Nutrition = "Nutrition",
    Podiatry = "Podiatry",
    PrimaryCare = "PrimaryCare",
    SpecialtyCare = "SpecialtyCare",
    UrgentCare = "UrgentCare",
    Urology = "Urology",
    WomensHealth = "WomensHealth"
}
export declare enum ServicesOtherEnum {
    OnlineScheduling = "OnlineScheduling"
}
export declare class Services extends SpeakeasyBase {
    benefits?: ServicesBenefitsEnum[];
    health?: ServicesHealthEnum[];
    lastUpdated?: Date;
    other?: ServicesOtherEnum[];
}
