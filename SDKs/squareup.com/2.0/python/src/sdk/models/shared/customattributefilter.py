from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import range


@dataclass_json
@dataclass
class CustomAttributeFilter:
    bool_filter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bool_filter' }})
    custom_attribute_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_attribute_definition_id' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    number_filter: Optional[range.Range] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_filter' }})
    selection_uids_filter: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selection_uids_filter' }})
    string_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'string_filter' }})
    
