from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import calculateitineraryresult


@dataclass_json
@dataclass
class CalculateResult:
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    value: Optional[calculateitineraryresult.CalculateItineraryResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
