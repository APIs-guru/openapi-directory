from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChartFavStarResponseResult:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
