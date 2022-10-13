from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class ScoreDetailResultEnum(str, Enum):
    PENDING = "pending"
    FOUND = "found"
    NOT_FOUND = "not_found"
    ERROR = "error"
    DELAYED = "delayed"
    IGNORED = "ignored"

class ScoreDetailSeverityEnum(str, Enum):
    UNKNOWN = "unknown"
    NONE = "none"
    VERY_LOW = "very_low"
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    VERY_HIGH = "very_high"


@dataclass_json
@dataclass
class ScoreDetail:
    result: ScoreDetailResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    score: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    severity: ScoreDetailSeverityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    
