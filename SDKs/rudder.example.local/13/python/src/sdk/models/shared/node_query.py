from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NodeQueryCompositionEnum(str, Enum):
    AND = "and"
    OR = "or"


@dataclass_json
@dataclass
class NodeQueryWhere:
    attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    comparator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparator') }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class NodeQuery:
    composition: Optional[NodeQueryCompositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('composition') }})
    select: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select') }})
    where: Optional[List[NodeQueryWhere]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('where') }})
    
