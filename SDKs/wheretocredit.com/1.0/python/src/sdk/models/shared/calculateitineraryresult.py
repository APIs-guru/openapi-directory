from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import calculateitineraryprogramresult


@dataclass_json
@dataclass
class CalculateItineraryResult:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    totals: Optional[List[calculateitineraryprogramresult.CalculateItineraryProgramResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totals' }})
    
