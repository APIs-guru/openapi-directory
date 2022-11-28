from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Tier:
    application: Optional[Reference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_id') }})
    entity_type: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    group_membership_criteria: Optional[List[GroupMembershipCriteria]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_membership_criteria') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
