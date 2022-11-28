from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Association:
    file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileId') }})
    object_group: Optional[ObjectGroupEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectGroup') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectId') }})
    object_type: Optional[ObjectTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectType') }})
    
