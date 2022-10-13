from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AeAssessmentAeAssessmentAssessmentCodeAssessmentCodeEnum(str, Enum):
    EXCLUDED = "Excluded"
    ELIGIBLE_JOB_HOLDER = "EligibleJobHolder"
    NON_ELIGIBLE_JOB_HOLDER = "NonEligibleJobHolder"
    ENTITLED_WORKER = "EntitledWorker"

class AeAssessmentAeAssessmentAssessmentEventAssessmentEventEnum(str, Enum):
    NON_ENROLMENT_EVENT = "NonEnrolmentEvent"
    AUTOMATIC_ENROLMENT = "AutomaticEnrolment"
    OPT_IN = "OptIn"
    VOLUNTARY_JOINER = "VoluntaryJoiner"
    CONTRACTUAL_ENROLMENT = "ContractualEnrolment"

class AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnum(str, Enum):
    NONE = "None"
    OPT_OUT = "OptOut"
    OPT_IN = "OptIn"
    VOLUNTARY_JOINER = "VoluntaryJoiner"
    CONTRACTUAL_PENSION = "ContractualPension"
    CEASED_MEMBERSHIP = "CeasedMembership"
    LEAVER = "Leaver"
    EXCLUDED = "Excluded"

class AeAssessmentAeAssessmentAssessmentResultAssessmentResultEnum(str, Enum):
    INCONCLUSIVE = "Inconclusive"
    NO_CHANGE = "NoChange"
    ENROL = "Enrol"
    EXIT = "Exit"


@dataclass_json
@dataclass
class AeAssessmentAeAssessmentAeAssessment:
    age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Age' }})
    assessment_code: Optional[AeAssessmentAeAssessmentAssessmentCodeAssessmentCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssessmentCode' }})
    assessment_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssessmentDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    assessment_event: Optional[AeAssessmentAeAssessmentAssessmentEventAssessmentEventEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssessmentEvent' }})
    assessment_override: Optional[AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssessmentOverride' }})
    assessment_result: Optional[AeAssessmentAeAssessmentAssessmentResultAssessmentResultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssessmentResult' }})
    is_member_of_alternative_pension_scheme: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsMemberOfAlternativePensionScheme' }})
    opt_out_window_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OptOutWindowEndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    qualifying_earnings: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualifyingEarnings' }})
    reenrolment_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReenrolmentDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state_pension_age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatePensionAge' }})
    state_pension_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatePensionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tax_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxPeriod' }})
    tax_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxYear' }})
    

@dataclass_json
@dataclass
class AeAssessment:
    ae_assessment: Optional[AeAssessmentAeAssessmentAeAssessment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AEAssessment' }})
    
