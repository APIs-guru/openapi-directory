from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""ScoreDetail
    Represents score detail of a background check
    """
    
    result: ScoreDetailResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    score: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    severity: ScoreDetailSeverityEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    
