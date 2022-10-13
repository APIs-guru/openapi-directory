from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import placedbetpart


@dataclass_json
@dataclass
class PlacedBetLeg:
    number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    parts: List[placedbetpart.PlacedBetPart] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parts' }})
    sort: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
