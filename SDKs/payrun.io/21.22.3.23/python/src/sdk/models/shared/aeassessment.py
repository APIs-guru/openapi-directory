from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AeAssessmentAeAssessmentAssessmentCodeEnum(str, Enum):
    EXCLUDED = "Excluded"
    ELIGIBLE_JOB_HOLDER = "EligibleJobHolder"
    NON_ELIGIBLE_JOB_HOLDER = "NonEligibleJobHolder"
    ENTITLED_WORKER = "EntitledWorker"

class AeAssessmentAeAssessmentAssessmentEventEnum(str, Enum):
    NON_ENROLMENT_EVENT = "NonEnrolmentEvent"
    AUTOMATIC_ENROLMENT = "AutomaticEnrolment"
    OPT_IN = "OptIn"
    VOLUNTARY_JOINER = "VoluntaryJoiner"
    CONTRACTUAL_ENROLMENT = "ContractualEnrolment"

class AeAssessmentAeAssessmentAssessmentOverrideEnum(str, Enum):
    NONE = "None"
    OPT_OUT = "OptOut"
    OPT_IN = "OptIn"
    VOLUNTARY_JOINER = "VoluntaryJoiner"
    CONTRACTUAL_PENSION = "ContractualPension"
    CEASED_MEMBERSHIP = "CeasedMembership"
    LEAVER = "Leaver"
    EXCLUDED = "Excluded"

class AeAssessmentAeAssessmentAssessmentResultEnum(str, Enum):
    INCONCLUSIVE = "Inconclusive"
    NO_CHANGE = "NoChange"
    ENROL = "Enrol"
    EXIT = "Exit"


@dataclass_json
@dataclass
class AeAssessmentAeAssessment:
    age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Age') }})
    assessment_code: Optional[AeAssessmentAeAssessmentAssessmentCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssessmentCode') }})
    assessment_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssessmentDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    assessment_event: Optional[AeAssessmentAeAssessmentAssessmentEventEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssessmentEvent') }})
    assessment_override: Optional[AeAssessmentAeAssessmentAssessmentOverrideEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssessmentOverride') }})
    assessment_result: Optional[AeAssessmentAeAssessmentAssessmentResultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssessmentResult') }})
    is_member_of_alternative_pension_scheme: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsMemberOfAlternativePensionScheme') }})
    opt_out_window_end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptOutWindowEndDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    qualifying_earnings: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualifyingEarnings') }})
    reenrolment_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReenrolmentDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state_pension_age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatePensionAge') }})
    state_pension_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatePensionDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tax_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxPeriod') }})
    tax_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxYear') }})
    

@dataclass_json
@dataclass
class AeAssessment:
    ae_assessment: Optional[AeAssessmentAeAssessment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AEAssessment') }})
    
