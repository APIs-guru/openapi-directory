from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ValidatorConfigJSONOpEnum(str, Enum):
    LESS_THAN_ = "<"
    LESS_THAN_EQUAL_ = "<="
    GREATER_THAN_ = ">"
    GREATER_THAN_EQUAL_ = ">="
    EQUAL_EQUAL_ = "=="
    NOT_EQUAL_ = "!="


@dataclass_json
@dataclass
class ValidatorConfigJSON:
    op: Optional[ValidatorConfigJSONOpEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'op' }})
    threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threshold' }})
    
