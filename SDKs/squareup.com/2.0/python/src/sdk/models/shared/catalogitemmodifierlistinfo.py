from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import catalogmodifieroverride


@dataclass_json
@dataclass
class CatalogItemModifierListInfo:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    max_selected_modifiers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_selected_modifiers' }})
    min_selected_modifiers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min_selected_modifiers' }})
    modifier_list_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifier_list_id' }})
    modifier_overrides: Optional[List[catalogmodifieroverride.CatalogModifierOverride]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifier_overrides' }})
    
