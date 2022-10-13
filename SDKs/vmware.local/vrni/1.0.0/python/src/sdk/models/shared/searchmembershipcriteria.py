from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import allentitytype_enum


@dataclass_json
@dataclass
class SearchMembershipCriteria:
    entity_type: Optional[allentitytype_enum.AllEntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    
