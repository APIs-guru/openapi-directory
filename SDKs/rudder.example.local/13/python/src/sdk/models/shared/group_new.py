from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GroupNewProperties:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class GroupNewQueryCompositionEnum(str, Enum):
    AND = "and"
    OR = "or"


@dataclass_json
@dataclass
class GroupNewQueryWhere:
    attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    comparator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparator') }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class GroupNewQuery:
    r"""GroupNewQuery
    The criteria defining the group. If not provided, the group will be empty.
    """
    
    composition: Optional[GroupNewQueryCompositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('composition') }})
    select: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select') }})
    where: Optional[List[GroupNewQueryWhere]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('where') }})
    

@dataclass_json
@dataclass
class GroupNew:
    category: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    display_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dynamic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamic') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    properties: Optional[List[GroupNewProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    query: Optional[GroupNewQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
