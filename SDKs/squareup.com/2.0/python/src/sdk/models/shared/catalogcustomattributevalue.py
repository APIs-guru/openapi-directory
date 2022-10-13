from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogCustomAttributeValue:
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boolean_value' }})
    custom_attribute_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_attribute_definition_id' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    number_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_value' }})
    selection_uid_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selection_uid_values' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'string_value' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
