from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SortByClauseOrderEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"


@dataclass_json
@dataclass
class SortByClause:
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    order: Optional[SortByClauseOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    
