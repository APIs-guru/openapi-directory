from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ValidatePasswordResponse:
    score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    suggestions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestions' }})
    valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid' }})
    warning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warning' }})
    
