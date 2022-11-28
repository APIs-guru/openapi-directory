from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Application:
    create_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('create_time') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_id') }})
    entity_type: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    last_modified_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_modified_by') }})
    last_modified_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_modified_time') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
