from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import scoredetail
from . import scoredetail

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
    by_id: scoredetail.ScoreDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'by_id' }})
    by_name: scoredetail.ScoreDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'by_name' }})
    data_set: ScoreDataSetEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_set' }})
    result: Optional[ScoreResultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    score: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    severity: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    
