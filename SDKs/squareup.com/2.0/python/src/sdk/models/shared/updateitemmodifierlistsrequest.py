from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateItemModifierListsRequest:
    item_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_ids' }})
    modifier_lists_to_disable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifier_lists_to_disable' }})
    modifier_lists_to_enable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifier_lists_to_enable' }})
    
