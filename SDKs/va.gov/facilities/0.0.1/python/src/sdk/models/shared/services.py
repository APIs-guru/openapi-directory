from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ServicesBenefitsEnum(str, Enum):
    APPLYING_FOR_BENEFITS = "ApplyingForBenefits"
    BURIAL_CLAIM_ASSISTANCE = "BurialClaimAssistance"
    DISABILITY_CLAIM_ASSISTANCE = "DisabilityClaimAssistance"
    E_BENEFITS_REGISTRATION_ASSISTANCE = "eBenefitsRegistrationAssistance"
    EDUCATION_AND_CAREER_COUNSELING = "EducationAndCareerCounseling"
    EDUCATION_CLAIM_ASSISTANCE = "EducationClaimAssistance"
    FAMILY_MEMBER_CLAIM_ASSISTANCE = "FamilyMemberClaimAssistance"
    HOMELESS_ASSISTANCE = "HomelessAssistance"
    INSURANCE_CLAIM_ASSISTANCE_AND_FINANCIAL_COUNSELING = "InsuranceClaimAssistanceAndFinancialCounseling"
    INTEGRATED_DISABILITY_EVALUATION_SYSTEM_ASSISTANCE = "IntegratedDisabilityEvaluationSystemAssistance"
    PENSIONS = "Pensions"
    PRE_DISCHARGE_CLAIM_ASSISTANCE = "PreDischargeClaimAssistance"
    TRANSITION_ASSISTANCE = "TransitionAssistance"
    UPDATING_DIRECT_DEPOSIT_INFORMATION = "UpdatingDirectDepositInformation"
    VA_HOME_LOAN_ASSISTANCE = "VAHomeLoanAssistance"
    VOCATIONAL_REHABILITATION_AND_EMPLOYMENT_ASSISTANCE = "VocationalRehabilitationAndEmploymentAssistance"

class ServicesHealthEnum(str, Enum):
    AUDIOLOGY = "Audiology"
    CARDIOLOGY = "Cardiology"
    CAREGIVER_SUPPORT = "CaregiverSupport"
    COVID19_VACCINE = "Covid19Vaccine"
    DENTAL_SERVICES = "DentalServices"
    DERMATOLOGY = "Dermatology"
    EMERGENCY_CARE = "EmergencyCare"
    GASTROENTEROLOGY = "Gastroenterology"
    GYNECOLOGY = "Gynecology"
    MENTAL_HEALTH_CARE = "MentalHealthCare"
    OPHTHALMOLOGY = "Ophthalmology"
    OPTOMETRY = "Optometry"
    ORTHOPEDICS = "Orthopedics"
    NUTRITION = "Nutrition"
    PODIATRY = "Podiatry"
    PRIMARY_CARE = "PrimaryCare"
    SPECIALTY_CARE = "SpecialtyCare"
    URGENT_CARE = "UrgentCare"
    UROLOGY = "Urology"
    WOMENS_HEALTH = "WomensHealth"

class ServicesOtherEnum(str, Enum):
    ONLINE_SCHEDULING = "OnlineScheduling"


@dataclass_json
@dataclass
class Services:
    benefits: Optional[List[ServicesBenefitsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benefits') }})
    health: Optional[List[ServicesHealthEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health') }})
    last_updated: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    other: Optional[List[ServicesOtherEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('other') }})
    
