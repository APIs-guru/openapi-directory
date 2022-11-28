from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PriceRangeTypeEnum(str, Enum):
    STANDARD = "standard"


@dataclass_json
@dataclass
class PriceRange:
    r"""PriceRange
    PriceRange
    """
    
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    type: Optional[PriceRangeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
