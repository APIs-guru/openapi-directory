from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomFieldDefinitionValues:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    

@dataclass_json
@dataclass
class CustomFieldDefinition:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValue' }})
    is_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isRequired' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    values: Optional[List[CustomFieldDefinitionValues]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
