from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SortByClauseOrderEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"


@dataclass_json
@dataclass
class SortByClause:
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    order: Optional[SortByClauseOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    
