from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GroupUpdateQueryCompositionEnum(str, Enum):
    AND = "and"
    OR = "or"


@dataclass_json
@dataclass
class GroupUpdateQueryWhere:
    attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    comparator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparator') }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class GroupUpdateQuery:
    r"""GroupUpdateQuery
    The criteria defining the group. If not provided, the group will be empty.
    """
    
    composition: Optional[GroupUpdateQueryCompositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('composition') }})
    select: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select') }})
    where: Optional[List[GroupUpdateQueryWhere]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('where') }})
    

@dataclass_json
@dataclass
class GroupUpdate:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    dynamic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamic') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    query: Optional[GroupUpdateQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    
