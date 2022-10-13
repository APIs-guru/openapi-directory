from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PriceRangeTypeEnum(str, Enum):
    STANDARD = "standard"


@dataclass_json
@dataclass
class PriceRange:
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min' }})
    type: Optional[PriceRangeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
