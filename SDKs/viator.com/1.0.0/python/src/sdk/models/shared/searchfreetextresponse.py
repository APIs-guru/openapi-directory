from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SearchFreetextResponseSearchTypeEnum(str, Enum):
    PRODUCT = "PRODUCT"
    DESTINATION = "DESTINATION"
    ATTRACTION = "ATTRACTION"
    RECOMMENDATION = "RECOMMENDATION"


@dataclass_json
@dataclass
class SearchFreetextResponse:
    search_type: Optional[SearchFreetextResponseSearchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchType') }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    
