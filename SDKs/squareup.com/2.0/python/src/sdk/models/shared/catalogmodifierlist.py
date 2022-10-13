from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import catalogobject


@dataclass_json
@dataclass
class CatalogModifierList:
    modifiers: Optional[List[catalogobject.CatalogObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiers' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ordinal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ordinal' }})
    selection_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selection_type' }})
    
