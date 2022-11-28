from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ScoreDataSetEnum(str, Enum):
    AFFILIATIONS_AND_INSURANCES = "affiliations_and_insurances"
    ALERT_IN_MEDIA = "alert_in_media"
    BEHAVIOR = "behavior"
    BUSINESS_BACKGROUND = "business_background"
    CRIMINAL_RECORD = "criminal_record"
    DRIVING_LICENSES = "driving_licenses"
    INTERNATIONAL_BACKGROUND = "international_background"
    LEGAL_BACKGROUND = "legal_background"
    PERSONAL_IDENTITY = "personal_identity"
    PROFESSIONAL_BACKGROUND = "professional_background"
    TRAFFIC_FINES = "traffic_fines"
    VEHICLE_INFORMATION = "vehicle_information"
    VEHICLE_PERMITS = "vehicle_permits"
    TAXES_AND_FINANCES = "taxes_and_finances"

class ScoreResultEnum(str, Enum):
    PENDING = "pending"
    FOUND = "found"
    NOT_FOUND = "not_found"
    ERROR = "error"
    DELAYED = "delayed"
    IGNORED = "ignored"


@dataclass_json
@dataclass
class Score:
    r"""Score
    Represents dataset scores. A score is a number between 0 and 1 that indicates how trustworthy the person, vehicle, or company is accordig to the result of the background check. Severity represents the risk associated with each dataset according to the background check. Keep in mind that you should use either the score or the severity but not both
    """
    
    by_id: ScoreDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('by_id') }})
    by_name: ScoreDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('by_name') }})
    data_set: ScoreDataSetEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_set') }})
    score: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    severity: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    result: Optional[ScoreResultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
